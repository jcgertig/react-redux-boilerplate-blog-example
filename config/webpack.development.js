const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');


module.exports = function development(apiBase, storagePrefix) {
  return {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      'eventsource-polyfill',
      // necessary for hot reloading with IE

      'webpack-hot-middleware/client',
      // listen to code updates emitted by hot middleware

      '../src/index.js',
      // the entry point of our app
    ],

    devtool: 'inline-source-map',

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates

      new webpack.NoEmitOnErrorsPlugin(),
      // do not emit compiled assets that include errors

      new HtmlWebpackPlugin({
        template,
        title: 'My React App Dev',
        filename: 'index.html',
        mobile: true,
        devServer: false,
        devMiddleware: true,
        appMountId: 'root',
        window: {
          STORAGE_PREFIX: storagePrefix,
          API_BASE: apiBase,
        },
      }),
    ],
  };
};
