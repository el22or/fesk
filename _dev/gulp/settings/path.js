'use strict';

var path = require('path');

var rootPath = {
  dev: path.resolve(__dirname, '../../'),
  tmp: path.resolve(__dirname, '../../.tmp/'),
  theme: path.resolve(__dirname, '../../../')
};

module.exports = {
  tmp: {
    css: path.resolve(rootPath.tmp, './assets/css'),
    sass: path.resolve(rootPath.tmp, './assets/sass'),
    js: path.resolve(rootPath.tmp, './assets/js'),
    images: path.resolve(rootPath.tmp, './assets/images'),
    svg: path.resolve(rootPath.tmp, './assets/svg'),
    fonts: path.resolve(rootPath.tmp, './assets/fonts')
  },
  dev: {
    css: path.resolve(rootPath.dev, './assets/css'),
    sass: path.resolve(rootPath.dev, './assets/sass'),
    js: path.resolve(rootPath.dev, './assets/js'),
    images: path.resolve(rootPath.dev, './assets/images'),
    svg: path.resolve(rootPath.dev, './assets/svg'),
    fonts: path.resolve(rootPath.dev, './assets/fonts')
  },
  theme: {
    css: path.resolve(rootPath.theme, './assets/stylesheets'),
    fonts: path.resolve(rootPath.theme, './assets/fonts'),
    images: path.resolve(rootPath.theme, './assets/images'),
    js: path.resolve(rootPath.theme, './assets/scripts'),
    svg: path.resolve(rootPath.theme, './assets/images/svg')
  }
};
