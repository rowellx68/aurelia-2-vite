import { preprocess } from '@aurelia/plugin-conventions'
import { transpileModule } from 'typescript'
import config from './tsconfig.json'

export default function pluginAurelia() {
  return {
    name: 'aurelia',
    transform(code: string, id: string) {
      if (id.includes('.html') || id.includes('.ts')) {
        const result = preprocess({
          path: id,
          contents: code
        }, {})

        if (id.includes('.ts')) {
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
}