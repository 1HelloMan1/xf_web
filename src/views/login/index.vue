<!--
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-10-03 02:26:16
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-10-04 17:00:49
 * @FilePath: /xf_web/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login">
        <div class="header">

            <img src="@/assets/image/login/logo.png" alt="">
            <span>安徽血吸虫病防治管理信息系统</span>
        </div>
        <div class="content">
            <div id="jparticlesBg">
                <div class="zyl_login_cont"></div>

            </div>
            <div class="loginFrom">
                <div>安徽省血吸虫病防治研究所</div>
                <div>Anhui Institute of schistosomiasis control</div>
                <el-form :model="userForm" label-width="120px">
                    <el-form-item label="用户名称" prop="username">
                        <el-input v-model="userForm.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="用户密码" prop="password">
                        <el-input v-model="userForm.password" placeholder="请输入密码" />
                    </el-form-item>

                </el-form>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { Particle } from 'jparticles'
defineOptions({
    name: 'login'
})
// 定义用户表单
const userForm = reactive({
    username: '',
    password: '',
    captchas_key: '',
    captchas_value: ''
})
onMounted(() => {
    new Particle('#jparticlesBg', {
        color: '#fff',
        lineShape: 'cube',
        range: 2000,
        proximity: 100,
        num: 150,
        // 开启视差效果
        parallax: true,
        resize: true,
    })
})
</script>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;

    .header {
        margin-top: 25px;
        color: #0079c2;
        font-size: 18px;
        font-weight: 700;
        display: flex;
        // align-self: center;
        align-items: center;

        img {
            width: 30px;
            height: 30px;
            margin-right: 15px;
            margin-left: 15px;

        }
    }

    .content {
        margin-top: 20px;
        width: 100%;
        height: 70vh;
        min-height: 400px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        #jparticlesBg {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: url('@/assets/image/login/loginbg.png') no-repeat center 100%/100%;
        }

        .loginFrom {
            width: 620px;
            min-width: 00px;
            background: url('@/assets/image/login/loginFormbg.png') no-repeat center 100%/100%;
            height: 400px;
            padding-left: 250px;
            box-sizing: border-box;

            >div {
                color: #2396F3;
                text-align: center;
            }

            >div:nth-of-type(1) {
                margin-top: 80px;
                font-weight: 900px;
                font-size: 24px;
            }

            >div:nth-of-type(2) {
                margin: 20px 0;
                font-size: 12px;
            }
        }
    }

}
</style>