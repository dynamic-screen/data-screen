const localdev = {
    '/api/screen': {
        target: 'http://47.94.149.72:9991',
        pathRewrite: {
            '^/api/screen': '/',
        },
    },
};

const prod = {
    '/api/screen': {
        target: 'http://81.68.82.139:127',
        pathRewrite: {
            '^/api/screen': '/',
        },
    },
};

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    devServer: {
        proxy: isDev ? localdev : prod,
    },
};
