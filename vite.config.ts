import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperComponents, { kebabCase } from '@uni-helper/vite-plugin-uni-components'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-manifest
    UniHelperManifest(),
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniHelperPages(),
    // https://github.com/uni-helper/vite-plugin-uni-layouts
    UniHelperLayouts(),
    // https://github.com/uni-helper/vite-plugin-uni-components
    UniHelperComponents({
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
      resolvers: [
        (function () {
          return {
            type: 'component',
            resolve: (name: string) => {
              if (name.match(/^Tm[A-Z]/)) {
                const partialName = kebabCase(name)

                return { name, from: `@/tmui/components/${partialName}/${partialName}.vue` }
              }
            },
          }
        })(),
      ],
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', '@vueuse/core', 'uni-app'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/utils'],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),
    Uni(),

  ],
  build: {
    target: 'es6',
    cssTarget: 'chrome61',
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
})
