import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import browserslistToEsbuild from "browserslist-to-esbuild"
import timeReporter from "vite-plugin-time-reporter"
import Inspector from "unplugin-vue-inspector/vite" // OR vite-plugin-vue-inspector
// import { unheadComposablesImports } from "unhead"
// import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5252,
    hmr: { overlay: true },
  },
  preview: {
    port: 6161,
  },
  build: {
    target: browserslistToEsbuild(),
  },
  esbuild: {
    pure: mode === "production" ? ["console.log", "console.info", "debug"] : [],
  },
  plugins: [
    vue(),
    // AutoImport({
    //   imports: [unheadComposablesImports],
    // }),
    Inspector(),
    timeReporter(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}))
