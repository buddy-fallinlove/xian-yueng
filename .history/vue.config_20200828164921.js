module.exports = {
    devServer: {
        proxy: {
            '/api': {
                ws: false,
                target: 'http://localhost:8888/api/private/v1/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}