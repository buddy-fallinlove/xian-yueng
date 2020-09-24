module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                ws: false,
                target: 'http:127.0.0.1:1337/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}