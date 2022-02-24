import { defineConfig } from 'vite'
import { resolve } from 'path'
import html from 'rollup-plugin-html'

export default defineConfig({
  resolve: {
    alias: {
      module: resolve(__dirname, 'src/module')
    }
  },
  plugins: [html()]
})