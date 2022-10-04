/*
 * @Author: syx 1492332150@qq.com
 * @Date: 2022-08-20 13:53:24
 * @LastEditors: syx 1492332150@qq.com
 * @LastEditTime: 2022-10-04 17:56:40
 * @FilePath: /xf_web/src/api/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from "./http";
import type * as T from './types'

class Captchas {

    get(): Promise<T.IGetCaptchas> {
        return http.post('captchas')
    }
}
export default new Captchas();