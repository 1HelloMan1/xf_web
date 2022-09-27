<!--
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-07-13 14:19:03
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-09-03 12:13:07
 * @FilePath: /xf_web/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const emit = defineEmits(['aaa'])
let a = useCounterStore()
let c = $ref({ a: 1, b: { c: 1 } })
//  const d= reactive({a})
// d.
defineOptions({
  name: 'helloWorld'
})

function emit1() {

  emit('aaa', instance);
}
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings" @click="emit1">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">{{ a.doubleCount(1) }}</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
      <div>{{ c }}</div>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
