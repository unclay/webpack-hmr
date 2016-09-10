var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('./webpack.base.conf.js')

config.plugins = (config.plugin || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.html')
  })
])

module.exports = config