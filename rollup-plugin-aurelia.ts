import { preprocess } from '@aurelia/plugin-conventions'
import { createFilter } from '@rollup/pluginutils'
import { transpileModule } from 'typescript'
import config from './tsconfig.json'

export default function pluginAurelia() {
  const isTs = createFilter(/\.ts$/)

  return {
    name: 'vite:aurelia',
    async transform(code: string, id: string) {
      const result = preprocess({
        path: id,
        contents: code
      }, {})

      if (isTs(id)) {
        const { outputText, sourceMapText } = transpileModule(result.code, config as any)

        return {
          code: outputText,
          map: sourceMapText
        }
      }

      return result
    }
  }
}