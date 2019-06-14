module.exports = {
  publicPath: '/cateye/',
  devServer: {
    port: 9090,
    proxy: {
      '/my': {
        target: 'http://m.maoyan.com/',
        pathRewrite: {
          '^/my': ''
        }
      }
    }
  }
}
