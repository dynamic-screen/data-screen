const localdev = {
    '/api/screen': {
        target: 'http://47.94.149.72:9991',
        pathRewrite: {
            '^/api/screen': '/',
        },
    },
};

const prod = {};

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    devServer: {
        proxy: isDev ? localdev : prod,
    },
};
