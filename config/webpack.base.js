const { resolve } = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const styleVars = require('../src/globalStyleVars');

module.exports = {
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, '../dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
  },

  context: resolve(__dirname),

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                precss({
                  variables: { variables: styleVars },
                }),
                autoprefixer,
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          'url-loader?limit=100000',
        ],
      },
      {
        test: /\.json$/,
        use: [
          'json-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 3,
    }),
  ],
};
