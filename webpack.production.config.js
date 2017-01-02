const WebpackStripLoader = require('strip-loader')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015',
        plugins: ['react-hot-loader/babel']
       }, {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: WebpackStripLoader.loader('console.log')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
}
