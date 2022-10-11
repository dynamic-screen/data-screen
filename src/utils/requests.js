import { request } from './request';

export const postRequest = (url, params) => {
    return request({
        method: 'post',
        url: url,
        data: JSON.stringify(params),
    });
};

export const getRequest = (url, params) => {
    return request({
        method: 'get',
        url: url,
        params: params,
    });
};
