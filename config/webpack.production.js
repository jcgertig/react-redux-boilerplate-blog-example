const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');

module.exports = function production(apiBase, storagePrefix) {
  return {
    devTool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template,
        title: 'My React App Prod',
        filename: 'index.html',
        mobile: true,
        devServer: false,
        appMountId: 'root',
        window: {
          STORAGE_PREFIX: storagePrefix,
          API_BASE: apiBase,
        },
      }),

      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
        },
        comments: false,
      }),
    ],
  };
};
