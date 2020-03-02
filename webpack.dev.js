const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      "/api": "http:127.0.0.1:5000"
    }
  }
});
