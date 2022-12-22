import fs from 'fs';
import  {createSSRApp} from 'vue';
import {renderToString} from 'vue/server-renderer';
import mjml2html from 'mjml';

import App from './App.vue';

const app = createSSRApp(App);

app.config.compilerOptions.isCustomElement = (tag) => {
    return tag.startsWith('mj')
}

const renderMjml = ({head, body}) => {

    app.component('Head', head);
    app.component('Body', body);

    renderToString(app).then((mjml) => {
        const html = mjml2html(mjml);
        console.log(html);
    })
};

const run = folderPath => {

    const envs = require(`${folderPath}/environment.js`);
    const head = require(`${folderPath}/Head.vue`);
    const body = require(`${folderPath}/Head.vue`);
    renderMjml({head,body});
}

run('./nss-share-protection');