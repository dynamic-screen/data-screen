const localdev = {
    '/api/screen': {
        target: 'http://47.94.149.72:9991',
        pathRewrite: {
            '^/api/screen': '/',
        },
    },
};

module.exports = {
    devServer: {
        proxy: localdev,
    },
};
