const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const customStyles = new ExtractTextPlugin('style-[md5:contenthash:hex:6].css');
const bsStyle = new ExtractTextPlugin("bootstrap.min.css");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: './main.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: customStyles.extract (
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }
        )
      },
      {
        test: /\.(css)$/,
        use: bsStyle.extract (
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }
        )
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    bsStyle, customStyles,
    new CleanWebpackPlugin({cleanStaleWebpackAssets: true})
  ]
};
