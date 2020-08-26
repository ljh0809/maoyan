const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/maoyan',createProxyMiddleware({
        target:'https://show.maoyan.com/',
        changeOrigin:true,
        pathRewrite:{
            '/maoyan':''
        }
    }))
}