module.exports = {
  publicPath: '', // 相对路径
  lintOnSave: false,
  devServer : {
    //   open : true, // 当启动项目的时候 是否自动打开浏览器
    //   host : '0.0.0.0',
    port: 8180,

    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target      : 'http://localhost:9100',   //代理接口
        ws          : true,
        // target      : 'http://47.95.4.215',   //代理接口
        changeOrigin: true,
        pathRewrite : {
          '^/api': '',    //代理的路径
        },
      },
    },
    // 本地数据, 模拟请求
    before(app, server) {
      // http://localhost:8081/data/eleme
      // app.get('/data/eleme', function (req, res) {
      //   res.json(eleme);
      // });
    },
  },
}
