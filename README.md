# Vue 3 with SSR + Vite + MJML

the template for MJML render

the example project at https://github.com/vitejs/vite-plugin-vue/tree/main/playground/ssr-vue

for more info , please read : https://vitejs.dev/guide/ssr.html

## Init project

use vite-cli to init project with ssr-vue template in vite github repo

```
andrew_s_wang@tw-andrewswang projects % npm create vite@latest my-vue-app -- --template ssr-vue
? "ssr-vue" isn't a valid template. Please choose from below:  › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
    React
    Preact
    Lit
    Svelte
❯   Others
---------------------
? Select a variant: › - Use arrow-keys. Return to submit.
❯   create-vite-extra ↗
---------------------
? Select a template: › - Use arrow-keys. Return to submit.
    ssr-vanilla
❯   ssr-vue
    ssr-react
    ssr-preact
    ssr-svelte
    ssr-solid
    deno-vanilla
    deno-vue
    deno-react
  ↓ deno-preact
---------------------
? Select a variant: › - Use arrow-keys. Return to submit.
❯   JavaScript
    TypeScript
---------------------
[ total info ]
andrew_s_wang@tw-andrewswang projects % npm create vite@latest my-vue-app -- --template ssr-vue
✔ "ssr-vue" isn't a valid template. Please choose from below:  › Others
✔ Select a variant: › create-vite-extra ↗
✔ Select a template: › ssr-vue
✔ Select a variant: › JavaScript

Scaffolding project in /Users/andrew_s_wang/Documents/projects/my-vue-app...

Done. Now run:

  cd my-vue-app
  npm install
  npm run dev
```

## Steps of SSG

1. use `vite build --ssr src/entry-server.js --outDir dist/server` to build out the source js file
2. add prerender.js , run it to generate the html for files in pages

## Email 

- Email.vue

### relate

https://youtu.be/LoVIrZHML24?si=_X2sa6_S-Ga89x-5