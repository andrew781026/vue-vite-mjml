// https://vitejs.dev/guide/ssr.html
import fs from "fs";
import fse from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import express  from "express";
import { createServer as createViteServer } from "vite";
import mjml2html from "mjml";
import { EventEmitter } from "events";

class SseHelper {
  constructor(watcher) {
    this.responses = {};
    const event = new EventEmitter();

    watcher.on("change", (file) => {
      console.log(`File ${file} has been changed`);
      const url = path.basename(file, ".vue").toLowerCase();
      event.emit("file-change", url);
    });

    event.on(`file-change`, (url) => {
      const data = JSON.stringify({ url, reload: true });
      if (this.responses[url])
        this.responses[url].forEach((res) => res.write(`data: ${data} \n\n`)); // Emit an SSE
    });
  }

  setResponseUrl(url, res) {
    const arr = this.responses[url];
    if (arr) return arr.push(res);
    else return (this.responses[url] = [res]);
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // 以中间件模式创建 Vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
  // 并让上级服务器接管控制
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // 使用 vite 的 Connect 实例作为中间件
  // 如果你使用了自己的 express 路由（express.Router()），你应该使用 router.use
  app.use(vite.middlewares);

  // set watcher & it's event
  const sseHelper = new SseHelper(vite.watcher);

  // the server side event URL
  app.get("/events/:url", async function (req, res) {
    res.set({
      "Cache-Control": "no-cache",
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
    });
    res.flushHeaders();
    const url = req.params.url;
    sseHelper.setResponseUrl(url, res);
  });

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
      const { render } = await vite.ssrLoadModule("/src/entry-server.js");

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

      // - https://masteringjs.io/tutorials/express/server-sent-events
      // append the server sent script
      const sseScript = `
              <script type="text/javascript">
                  const source = new EventSource('/events${url}');
            
                  source.addEventListener('message', event => {
                      const data = JSON.parse(event.data)
                      console.log('sse data=',data)
                      if (data.reload) location.reload()
                  });
              </script>
            `;

      const html = mjml2html(mjml).html.replace(
        "</body>",
        sseScript + "</body>"
      );

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
