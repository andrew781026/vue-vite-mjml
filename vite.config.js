import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://www.vuemastery.com/blog/building-a-plugin-with-vite/
const hotUpdateReport = () => ({
  name: "hot-update-report",
  handleHotUpdate({ file, timestamp, modules }) {
    console.log(`${timestamp}: ${modules.length} module(s) updated`);
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    hotUpdateReport(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("mj"),
        },
      },
    }),
  ],
});
