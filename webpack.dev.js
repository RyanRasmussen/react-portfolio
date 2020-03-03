const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      context: "/api",
      target: "http:127.0.0.1:5000",
      rewrite: function(req) {
        req.url = req.url.replace(/^\/api/, '');
      }
    },
    historyApiFallback: true,
  }
});
