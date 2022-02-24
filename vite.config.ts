import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'path'
import pluginAurelia from './rollup-plugin-aurelia'

export default defineConfig({
  resolve: {
    alias: {
      module: resolve(__dirname, 'src/module')
    }
  },
  plugins: [pluginAurelia() as PluginOption]
})