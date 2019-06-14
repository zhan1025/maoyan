module.exports = {
  // publicPath: '/cateye/',
  devServer: {
    port: 9090,
    proxy: 'http://m.maoyan.com/'
    // pathRewrite: {
    //   '^my': ''
    // }
  }
}
