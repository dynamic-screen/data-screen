import axios from 'axios';

export const request = axios.create({
    // 请求默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: '10000',
});

request.interceptors.response.use(
    res => {
        const { code, message } = res.data;
        if (code != 20000) {
            this.$notification['error']({
                message: '系统错误',
                description: message,
            });
        }
        return res.data;
    },
    err => {
        return Promise.reject(err);
        // eslint-disable-next-line comma-dangle
    }
);
