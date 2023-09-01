// 请求兼容性处理
import 'core-js/actual/array/iterator'
import 'core-js/actual/promise'
import 'core-js/actual/object/assign'
import 'core-js/actual/promise/finally'

import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import tmui from './tmui'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(tmui, {} as Tmui.tmuiConfig)

  return {
    app,
    Pinia,
  }
}
