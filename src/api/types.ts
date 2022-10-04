/*
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-08-20 13:54:27
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-10-04 18:42:24
 * @FilePath: /xf_web/src/api/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ILoginParams {
    username: string
    password: string | number,
    captchas_key: string,
    captchas_value: string
}
export interface IUserApi {
    login: (params: ILoginParams) => Promise<any>
}

export interface IGetCaptchas {
    captchas_image: string,
    key: string
}
