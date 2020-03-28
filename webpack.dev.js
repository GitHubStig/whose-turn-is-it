const { HotModuleReplacementPlugin } = require('webpack')
const merge = require('webpack-merge')
const path = require('path');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:2000/',
    port: 2000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ]
});
