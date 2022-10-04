<!--
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-07-13 14:19:03
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-09-27 19:34:22
 * @FilePath: /xf_web/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
import { useMainStore } from '@/stores/main'
import type { ComponentInternalInstance } from 'vue';
let a = useCounterStore()
let count = $ref(0)
let b = useMainStore()

// onMounted(() => {
//   console.log(123);

// })
defineOptions({
  name: 'App'
})


</script>
<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div>打我</div>
    <div class="wrapper">
      <HelloWorld @aaa="aaaa" msg="You did it!" />

      <nav>
        <RouterLink to="/home">Home{{ a.doubleCount(1) }}</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <RouterView />

</template>

<style scoped lang="scss">

</style>
