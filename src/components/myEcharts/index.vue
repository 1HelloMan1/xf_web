<!--
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-09-09 17:34:35
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-09-27 17:03:37
 * @FilePath: /xf_web/src/components/myEcharts/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div ref="echartsBox" class="myEcharts">
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'

const props = defineProps({
    options: {
        type: Object,
        default: {},
        required: true
    },
});
let myChart: echarts.ECharts
// 引入echart
const echartsBox = $ref<HTMLElement | null>(null)
// const resizeHandler = () => {
//     myChart.resize()
// }
onMounted(() => {
    // 初始化
    myChart = echarts.init(echartsBox as HTMLElement);
    myChart.setOption(props.options);
})
// 监听option变换更新图表
watch(() => props.options, (newVal) => {
    (myChart as echarts.ECharts).setOption(newVal);
}, {
    deep: true
})



defineOptions({
    name: 'myEcharts'
})
</script>

<style lang="scss" scoped>
.myEcharts {
    width: 100%;
    height: 100%;
}
</style>