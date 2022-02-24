import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'path'
import html from 'rollup-plugin-html'
import pluginAurelia from './rollup-plugin-aurelia'
import ts from '@rollup/plugin-typescript'

export default defineConfig({
  resolve: {
    alias: {
      module: resolve(__dirname, 'src/module')
    }
  },
  plugins: [pluginAurelia() as PluginOption]
})