/*
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-08-16 14:20:07
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-10-04 18:35:41
 * @FilePath: /xf_web/src/stores/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ILoginParams } from "@/api/types"
import loginApi from "@/api/user"
import { defineStore } from "pinia"

export const UserStore = defineStore({
    "id": 'user',
    state: () => ({
        info: {
        },
        jwt: window.sessionStorage.getItem('token') ?? null
    }),
    getters: {
        // jwt: (state) => {

        // },
    },
    actions: {
        async login(params: ILoginParams) {
            new Promise(async (resolve, reject) => {
                let user = await loginApi.login(params)

            })
        }
    }
})