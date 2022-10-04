<!--
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-10-03 02:26:16
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-10-04 19:14:35
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
                <el-form ref="userFormRef" :hide-required-asterisk="true" :rules="userFormRules" :model="userForm"
                         label-width="100px" class="userForm">
                    <el-form-item label="用户名称" prop="username">
                        <el-input v-model="userForm.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="用户密码" prop="password">
                        <el-input v-model="userForm.password" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item label="验证码" class="captchas">
                        <el-input v-model="userForm.captchas_value" placeholder="请输入验证码">

                        </el-input>
                        <img :src="captchas.captchas_image" alt="" @click="getCaptchas">
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login(userFormRef)">登录</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </div>
        <div class="foot">© 2021-2022 江苏好用健康科技有限公司</div>
    </div>
</template>

<script lang="ts" setup>
import { Particle } from 'jparticles'
import captchasApi from '@/api/captchas'
import { UserStore } from '@/stores/user'
import type { FormInstance, FormRules } from 'element-plus';

defineOptions({
    name: 'login'
})
// vuex用户
let userStore = UserStore()

// 定义用户表单
const userForm = reactive({
    username: '',
    password: '',
    captchas_key: '',
    captchas_value: ''
})
// 验证码
let captchas = $ref({
    key: '',
    captchas_image: ''
})
// 表单ref对象
const userFormRef = ref<FormInstance>()
// 获取验证码
function getCaptchas() {
    captchasApi.get().then(res => {
        captchas.key = res.key
        captchas.captchas_image = res.captchas_image
        userForm.captchas_key = captchas.key
    })
}
const userFormRules = $ref<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/g, message: '密码必须8到16位，至少1个大写字母，1个小写字母和1个数字,一个字符,不能包含特殊字符（非数字字母）', trigger: 'blur' }
    ],
    captchas_value: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ]
})
// 登录
function login(formEl: FormInstance | undefined) {
    if (!formEl) return;
    formEl.validate((valid: boolean) => {
        if (valid) {
            userStore.login(userForm)
        }
    })
}
onMounted(async () => {
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

    getCaptchas()


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

            .userForm {
                width: 90%;

                .captchas {
                    margin-top: 40px;
                    display: flex;
                    width: 100%;

                    :deep(.el-input) {
                        width: 45%;
                    }

                    img {
                        margin-left: 10px;
                        height: 30px;
                    }
                }

            }
        }
    }

    .foot {
        position: fixed;
        bottom: 20px;

        justify-content: center;
        text-align: center;
        width: 100%;
        font-size: 16px;
        color: #ccc;
    }

}
</style>