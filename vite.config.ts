/*
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-07-13 14:19:03
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-09-27 17:13:55
 * @FilePath: /xf_web/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
// 设置组件名称
import DefineOptions from 'unplugin-vue-define-options/vite';
import vue from '@vitejs/plugin-vue';
// 自动导入vue函数
import AutoImport from 'unplugin-auto-import/vite'

// 自动导入element plus
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    // DefineOptions(),
    // // 自动导入vue函数
    // AutoImport({
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //     /\.vue$/,
    //     /\.vue\?vue/, // .vue
    //     /\.md$/, // .md
    //   ],
    //   dts: true,
    //   imports: ['vue', 'vue-router'],
    //   // resolvers: [ElementPlusResolver()],
    // }),
    // ElementPlus()
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // 注入整体样式
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  },
})
