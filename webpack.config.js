var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './less/index.less',
    './client.jsx' // Your appʼs entry point
  ],
  devtool: 'source-map',

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
  devServer: {
    contentBase: "./public",
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
};
