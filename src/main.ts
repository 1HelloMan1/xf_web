/*
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-07-13 14:19:03
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-09-27 18:25:07
 * @FilePath: /xf_web/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// element
// import ElementPlus from 'element-plus'

import './assets/main.scss'

// 注册组件

const app = createApp(App)
// app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')

import { useMainStore } from '@/stores/main'
useMainStore()
self.app = app