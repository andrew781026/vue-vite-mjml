// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.
// ref : https://github.com/vitejs/vite-plugin-vue/blob/main/playground/ssr-vue/prerender.js

import fse from "fs-extra";
import path from "node:path";
import url from "node:url";
import mjml2html from "mjml";

const publicFolder = "public";
const distFolder = "dist/mjml";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fse.readFileSync(toAbsolute(`index.html`), "utf-8");

// determine routes to pre-render from src/pages
const routesToPrerender = fse
  .readdirSync(toAbsolute("src/pages"))
  .filter((file) => /.vue$/.test(file))
  .map((file) => {
    const name = file.replace(/\.vue$/, "").toLowerCase();
    return `/${name}`;
  });

export const prerender = async () => {
  const { render } = await import("./dist/server/entry-server.js");

  // pre-render each route...
  for (const url of routesToPrerender) {
    console.log("url:", url);
    const [appHtml] = await render(url);

    const mjml = template.replace(`<!--app-html-->`, appHtml);

    const mjmlPath = `${path.resolve(distFolder, "../mjml")}${url}.mjml`;
    await fse.writeFile(toAbsolute(mjmlPath), mjml);

    const html = mjml2html(mjml).html;
    const htmlPath = `${path.resolve(distFolder, "../html")}${url}.html`;
    await fse.writeFile(toAbsolute(htmlPath), html);

    await fse.copy(publicFolder, path.resolve(distFolder, "../html/assets"));
    console.log("pre-rendered:", mjmlPath);
  }
};

prerender();
