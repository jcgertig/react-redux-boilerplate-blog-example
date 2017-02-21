const webpackMerge = require('webpack-merge');
const emojic = require('emojic');
const colorIt = require('color-it');
const base = require('./webpack.base.js');

const gray = txt => colorIt(txt).gray();
const blue = txt => colorIt(txt).blue();

const API_BASE = {
  development: 'http://localhost:4000/api/v1',
  production: 'http://localhost:4000/api/v1',
};

const STORAGE_PREFIX = {
  development: '@my-app-dev',
  production: '@my-app-prod',
};

const ENV = process.env.NODE_ENV;

// eslint-disable-next-line import/no-dynamic-require
const config = webpackMerge(base, require(`./webpack.${ENV}.js`)(API_BASE[ENV], STORAGE_PREFIX[ENV]));

let msg = `${gray(emojic.greyExclamation)}${gray('  Running in ')}${blue(ENV)}${gray(' mode.')}`;
console.log(msg); // eslint-disable-line

msg = `${gray(emojic.greyExclamation)}${colorIt('  Using api base ').gray()}${blue(API_BASE[ENV])}${gray('.')}`;
console.log(msg); // eslint-disable-line

module.exports = config;
