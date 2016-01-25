var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./client.jsx",

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', 'build'),
    publicPath: '/build/'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['jsx-loader'] },
      { test: /\.json$/, loaders: ['json-loader'] },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};

