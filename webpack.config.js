require(`habitat`).load();
require(`babel-core/register`);

var path = require(`path`);
var webpack = require(`webpack`);
var ExtractTextPlugin = require(`extract-text-webpack-plugin`);
var autoprefixer = require(`autoprefixer`);

module.exports = {
  entry: {
    advocacy: [`./advocacy-main.jsx`, `./less/advocacy.less`],
    encrypt: [`./encrypt-app.jsx`, `./less/encrypt.less`]

  },
  output: {
    filename: `[name].js`,
    chunkFilename: `[id].chunk.js`,
    path: path.join(`public`, `build`),
    publicPath: `/build/`
  },
  resolve: {
    extensions: [``, `.js`, `.jsx`]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [`react-hot`, `babel-loader`]
      },
      {
        test: /\.json$/,
        loaders: [`json-loader`] },
      {
        test: /\.png/,
        loaders: [`file-loader`] },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: `url-loader?limit=8192`
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(`style-loader`, `css-loader!postcss-loader!less-loader`),
        exclude: [`node_modules`]
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BASKET_URL: process.env.BASKET_URL,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID
      })
    }),
    new ExtractTextPlugin(`[name].css`)
  ]
};
