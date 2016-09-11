'use strict';

//import angular from 'angular';

// angular modules
//import 'angular-ui-router';
// import './templates';
import './filters';
import './services';
import './directives';
import './factories';
import './controllers';
// create and bootstrap application
const requires = [
  'ionic',
    // 'react',
    // 'ngSails',
    // 'ngContextMenu',
    // 'ui.tree',
    // 'ui.router',
    // 'ui.bootstrap',
    // 'monospaced.elastic',
    // //'vcRecaptcha',
    // 'ngSanitize',
    // 'ui.select',
    // //'shoppinpal.mobile-menu',
    // 'ngAnimate',
    // 'LocalStorageModule',
    // 'templates',
    // 'uiGmapgoogle-maps',
    // 'hc.marked',
    // // 'BuDirectives',
    'starter.factories',
    'starter.filters',
    'starter.services',
    'starter.controllers',
    'starter.directives'
];

// mount on window for testing
const app = window.app = angular.module('starter', requires);

angular.module('starter').constant('AppSettings', require('./constants'));

//
angular.module('starter').config(require('./on_config').default);
//
//
//
angular.module('starter').run(require('./on_run').default);

// angular.bootstrap(document, ['starter'], {
//       strictDi: true
// });

