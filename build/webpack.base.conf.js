var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var src = path.join(projectRoot, 'src')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less/,
        loader: 'style!css!less'
      }
    ]
  }
}
