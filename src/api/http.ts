//http.ts
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress';
// 设置请求头和请求路径
axios.defaults.baseURL = import.meta.env.VITE_APP_WEB_URL;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use(
    (config): AxiosRequestConfig<any> => {
        const token = window.sessionStorage.getItem('jwt');
        if (token) {
            //@ts-ignore
            config.headers.token = token;
        }
        return config;
    },
    (error) => {
        return error;
    }
);
// 响应拦截
axios.interceptors.response.use((res) => {
    if (res.data.code === 111) {
        // sessionStorage.setItem('token', '');
        // token过期操作
    }

    return res;
}, error => {
    Object.keys(error.response.data.errors).forEach(item => error.response.data.errors[item].forEach((item: any) => ElMessage.error(item)))
    return Promise.reject(error);
});

interface ResType<T> {
    code: number;
    data?: T;
    msg: string;
    err?: string;
    [key: string]: any
}
interface Http {
    get<T>(url: string, params?: object): Promise<any>;
    post<T>(url: string, params?: object): Promise<any>;
    put<T>(url: string, params?: object): Promise<any>;
    delete<T>(url: string, params?: object): Promise<any>;
    upload<T>(url: string, params: object): Promise<any>;
    download(url: string): void;
}

const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start();
            axios
                .get(url, params)
                .then((res) => {
                    NProgress.done();
                    resolve(res.data);
                })
                .catch((err) => {
                    NProgress.done();
                    reject(err.data);
                });
        });
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start();
            axios
                .post(url, params)
                .then((res) => {
                    NProgress.done();
                    resolve(res.data);
                })
                .catch((err) => {
                    NProgress.done();
                    reject(err.data);
                });
        });
    },
    put(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start();
            axios
                .put(url, params)
                .then((res) => {
                    NProgress.done();
                    resolve(res.data);
                })
                .catch((err) => {
                    NProgress.done();
                    reject(err.data);
                });
        });
    },
    delete(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start();
            axios
                .delete(url, params)
                .then((res) => {
                    NProgress.done();
                    resolve(res.data);
                })
                .catch((err) => {
                    NProgress.done();
                    reject(err.data);
                });
        });
    },
    upload(url, file) {
        return new Promise((resolve, reject) => {
            NProgress.start();
            axios
                .post(url, file, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then((res) => {
                    NProgress.done();
                    resolve(res.data);
                })
                .catch((err) => {
                    NProgress.done();
                    reject(err.data);
                });
        });
    },
    download(url) {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;
        iframe.onload = function () {
            document.body.removeChild(iframe);
        };
        document.body.appendChild(iframe);
    },
};
export default http;
