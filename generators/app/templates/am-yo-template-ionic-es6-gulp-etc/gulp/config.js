/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: './www/',

  /*paths:{
    es6: ['./app/js/!**!/!*.js'],
    sass: ['./app/scss/!**!/!*.scss']
  },*/

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'www/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'www/js'
  },

  images: {
    src: 'app/images/**/*',
    dest: 'build/images'
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]

}
