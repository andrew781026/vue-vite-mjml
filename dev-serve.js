// https://vitejs.dev/guide/ssr.html
import fs from "fs";
import fse from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";
import mjml2html from "mjml";
import browserSync from "browser-sync";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const entryServer = "/src/entry-server.js";

class BrowserSyncHelper {
  constructor(viteDevServer, { proxy, port } = {}) {
    const bs = browserSync.create();

    bs.init({
      proxy,
      open: true,
      middleware: viteDevServer.middlewares,
      port,
    });

    viteDevServer.watcher.on("change", (file) => {
      console.log(`File ${file} has been changed`);
      if ( file.includes('/src/') || file.includes('/public/') ) bs.reload();
    });
  }
}

async function createServer() {
  const app = express();

  // 以中间件模式创建 Vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
  // 并让上级服务器接管控制
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
    root: __dirname,
  });

  new BrowserSyncHelper(vite, {
    port: 5188,
    proxy: "http://localhost:5173",
  });

  // 使用 vite 的 Connect 实例作为中间件
  // 如果你使用了自己的 express 路由（express.Router()），你应该使用 router.use
  app.use(vite.middlewares);

  const assetsFolder = path.resolve(__dirname, "dist/html/assets");

  // copy public folder to dist/html/assets folder
  fse.copy(path.resolve(__dirname, "public"), assetsFolder);

  // asset of image serve under /static
  app.use("/static", express.static(assetsFolder));

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. 读取 index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );

      // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
      //    同时也会从 Vite 插件应用 HTML 转换。
      //    例如：@vitejs/plugin-react 中的 global preambles
      template = await vite.transformIndexHtml(url, template);

      // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
      //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
      //    并提供类似 HMR 的根据情况随时失效。
      const { render } = await vite.ssrLoadModule(entryServer);

      // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
      //    函数调用了适当的 SSR 框架 API。
      //    例如 ReactDOMServer.renderToString()
      const [appHtml] = await render(url);

      // 4.1 無對應頁面時，回覆沒有此頁面
      if (appHtml === "<!---->") {
        return res
          .status(200)
          .set({ "Content-Type": "text/html" })
          .end("no this page");
      }

      // 5. 注入渲染后的应用程序 HTML 到模板中。
      const mjml = template.replace(`<!--app-html-->`, appHtml);

      const html = mjml2html(mjml).html;

      // 6. 返回渲染后的 HTML。
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
      // 你的实际源码中。
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const server = app.listen(5173, () => {
    const port = server.address().port;
    console.log(`express app listening at http://localhost:${port}`);
  });
}

createServer();
