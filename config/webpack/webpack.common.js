const path = require('path')

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
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
