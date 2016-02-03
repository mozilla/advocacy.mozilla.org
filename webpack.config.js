var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    advocacy: ['./advocacy-main.jsx', './less/advocacy.less'],
    encrypt: ['./encrypt-main.jsx', './less/encrypt.less']

  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', 'build'),
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'] },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap'),
        exclude: ['node_modules']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
