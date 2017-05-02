const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const webpack = require('webpack');
const EnvironmentPluginConfig = new webpack.EnvironmentPlugin([
  'COGNITO_POOL_ID',
  'COGNITO_APP_CLIENT_ID'
]);

const BabelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader"
};

const CSSLoader = {
  test: /\.css$/,
  loader: "style-loader!css-loader?modules!postcss-loader"
};

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [BabelLoader, CSSLoader]
  },
  plugins: [HtmlWebpackPluginConfig, EnvironmentPluginConfig]
};