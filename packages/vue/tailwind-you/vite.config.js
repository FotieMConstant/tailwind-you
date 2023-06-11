import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es", "cjs"],
      fileName: (format) => `vue-components.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        preserveModules: true,
        exports: "named"
      },
    },
  }
})
