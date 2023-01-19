// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.
// ref : https://github.com/vitejs/vite-plugin-vue/blob/main/playground/ssr-vue/prerender.js

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import mjml2html from "mjml";

const publicFolder = "public";
const distFolder = "dist/mjml";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(
  toAbsolute(`${distFolder}/index.html`),
  "utf-8"
);
const { render } = await import("./dist/server/entry-server.js");

// determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute("src/pages"))
  .filter((file) => /.vue$/.test(file))
  .map((file) => {
    const name = file.replace(/\.vue$/, "").toLowerCase();
    return `/${name}`;
  });

export const prerender = async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    console.log("url:", url);
    const [appHtml] = await render(url);

    const mjml = template.replace(`<!--app-html-->`, appHtml);

    // TODO : 整理 mj-head 跟 mj-body 的內容到一起

    const mjmlPath = `${path.resolve(distFolder, "../mjml")}${url}.mjml`;
    fs.writeFileSync(toAbsolute(mjmlPath), mjml);


    const html = mjml2html(mjml).html;
    const htmlPath = `${path.resolve(distFolder, "../html")}${url}.html`;
    fs.writeFileSync(toAbsolute(htmlPath), html);

    fs.readdirSync(publicFolder).forEach((file) => {
      fs.copyFileSync(
        path.resolve(publicFolder, file),
        path.resolve(distFolder, "../html/assets", file)
      );
    });

    console.log("pre-rendered:", mjmlPath);
  }
};

prerender();
