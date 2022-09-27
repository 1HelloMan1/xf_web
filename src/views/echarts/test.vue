<!--
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-09-09 16:30:42
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-09-27 17:15:07
 * @FilePath: /xf_web/src/views/echarts/test.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="echarts">
        <!-- <myEcharts style="width: 300px;height: 500px;" :options="option"></myEcharts> -->
        <el-button type="primary">Primary</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import myEcharts from '@/components/myEcharts/index.vue'
// defineOptions({
//     name: 'echarts'
// })
const option = $ref({
    xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
        }
    ]
});
</script>

<style lang="scss" scoped>
.echarts {}
</style>