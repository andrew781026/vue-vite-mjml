// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.
// ref : https://github.com/vitejs/vite-plugin-vue/blob/main/playground/ssr-vue/prerender.js

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const distFolder = 'dist/mjml'
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute(`${distFolder}/index.html`), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// determine routes to pre-render from src/pages
const routesToPrerender = fs
    .readdirSync(toAbsolute('src/pages'))
    .filter(file => /.vue$/.test(file))
    .map((file) => {
        const name = file.replace(/\.vue$/, '').toLowerCase()
        return name === 'home' ? `/` : `/${name}`
    });

(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const [appHtml] = await render(url)

        // combine all styles in related .vue files

        const html = template
            .replace(`<!--app-html-->`, appHtml)

        const filePath = `${distFolder}${url === '/' ? '/index' : url}.mjml`
        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('pre-rendered:', filePath)
    }

    // done, delete ssr manifest
    fs.unlinkSync(toAbsolute(`${distFolder}/ssr-manifest.json`))
})()