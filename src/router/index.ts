/*
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-07-13 14:19:03
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-10-03 02:33:46
 * @FilePath: /xf_web/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCounterStore } from '@/stores/counter'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/echart',
      name: 'echart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/echarts/test.vue')
    },
    {
      path: "/:catchAll(.*)",
      component: import('../views/echarts/test.vue'),
    },

  ]
})
// 路由守卫
// router.beforeEach(() => {
//   const store = useCounterStore()
//   console.log(store);

// })
// router.beforeEach((to, from, next) => {
//   const { isLogin } = localStorage;
//   isLogin || to.name === "Login" ? next() : next({ name: "Login" });
// });
export default router

// console.log(import.meta.env, 'env');
