const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var sourceDirectory = path.resolve(__dirname, '../../src')
var publicDirectory = path.resolve(__dirname, '../../public')

module.exports = {
  entry: {
    app: sourceDirectory + '/index.jsx'
  },
  output: {
    filename: 'app.js',
    path: publicDirectory,
  },
  // output: {
  //   path: publicDirectory,
  //   filename: 'js-[name].js',
  //   chunkFilename: 'jschunk-[name].bundle.js',
  //   publicPath: ''
  // },
  resolve: { extensions: ['.jsx', '.js', '.json'] },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: true
              // sourceMap: process.env.NODE_ENV !== 'production'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: publicDirectory + '/index.html',
      template: sourceDirectory + '/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
}
