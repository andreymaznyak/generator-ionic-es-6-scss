(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\ProjWS\\am-barcode-app\\app\\js\\constants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var AppSettings = {
  appTitle: 'Сады Приморья',
  apiUrl: '/api/v1'
};

exports.default = AppSettings;

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\AccountCtrl.js":[function(require,module,exports){
/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}

AccountCtrl.$inject = ["$scope"];

exports.default = {
  name: 'AccountCtrl',
  fn: AccountCtrl
};

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\Chats\\ChatDetailCtrl.js":[function(require,module,exports){
/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function ChatsDetailCtrl($scope, $stateParams, chats) {

  $scope.chat = chats.get($stateParams.chatId);
}

ChatsDetailCtrl.$inject = ["$scope", "$stateParams", "chats"];

exports.default = {
  name: 'ChatsDetailCtrl',
  fn: ChatsDetailCtrl
};

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\Chats\\ChatsCtrl.js":[function(require,module,exports){
/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function ChatsCtrl($scope, chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = chats.all();
  $scope.remove = function (chat) {
    chats.remove(chat);
  };
}

ChatsCtrl.$inject = ["$scope", "chats"];

exports.default = {
  name: 'ChatsCtrl',
  fn: ChatsCtrl
};

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\DashCtrl.js":[function(require,module,exports){
/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function DashCtrl($scope) {

  console.log('hello');
}

DashCtrl.$inject = ["$scope"];

exports.default = {
  name: 'DashCtrl',
  fn: DashCtrl
};

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\index.js":[function(require,module,exports){
(function (__dirname){
'use strict';

//import angular from 'angular';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var controllersModule = angular.module('starter.controllers', []);

var controllers = ({"AccountCtrl":require("./AccountCtrl.js"),"Chats":({"ChatDetailCtrl":require("./Chats\\ChatDetailCtrl.js"),"ChatsCtrl":require("./Chats\\ChatsCtrl.js")}),"DashCtrl":require("./DashCtrl.js")});
console.log(__dirname);
function registerControllers(controllers) {
  Object.keys(controllers).forEach(function (key) {
    var item = controllers[key];
    if (!item.name || !item.fn) {
      registerControllers(item);
    } else {
      controllersModule.controller(item.name, item.fn);
    }
  });
}
registerControllers(controllers);

exports.default = controllersModule;

}).call(this,"/app\\js\\controllers")

},{"./AccountCtrl.js":"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\AccountCtrl.js","./Chats\\ChatDetailCtrl.js":"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\Chats\\ChatDetailCtrl.js","./Chats\\ChatsCtrl.js":"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\Chats\\ChatsCtrl.js","./DashCtrl.js":"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\DashCtrl.js"}],"C:\\ProjWS\\am-barcode-app\\app\\js\\directives\\index.js":[function(require,module,exports){
'use strict';

//import angular from 'angular';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var directivesModule = angular.module('starter.directives', []);

var directives = ({});

Object.keys(directives).forEach(function (key) {
  var item = directives[key];

  directivesModule.directive(item.name, item.fn);
});

exports.default = directivesModule;

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\factories\\Chats.js":[function(require,module,exports){
/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function chats() {

  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function all() {
      return chats;
    },
    remove: function remove(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function get(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}

chats.$inject = [];

exports.default = {
  name: 'chats',
  fn: chats
};

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\factories\\index.js":[function(require,module,exports){
'use strict';

//import angular from 'angular';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var servicesModule = angular.module('starter.factories', []);

var services = ({"Chats":require("./Chats.js")});
console.log(services);
Object.keys(services).forEach(function (key) {
  var item = services[key];

  servicesModule.factory(item.default.name, item.default.fn);
});

exports.default = servicesModule;

},{"./Chats.js":"C:\\ProjWS\\am-barcode-app\\app\\js\\factories\\Chats.js"}],"C:\\ProjWS\\am-barcode-app\\app\\js\\filters\\index.js":[function(require,module,exports){
'use strict';

//import angular from 'angular';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var filtersModule = angular.module('starter.filters', []);

var filters = ({});

Object.keys(filters).forEach(function (key) {
  var item = filters[key];

  filtersModule.filter(item.name, item.fn);
});

exports.default = filtersModule;

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\main.js":[function(require,module,exports){
'use strict';

//import angular from 'angular';

// angular modules
//import 'angular-ui-router';
// import './templates';

require('./filters');

require('./services');

require('./directives');

require('./factories');

require('./controllers');

// create and bootstrap application
var requires = ['ionic',
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
'starter.factories', 'starter.filters', 'starter.services', 'starter.controllers', 'starter.directives'];

// mount on window for testing
var app = window.app = angular.module('starter', requires);

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

},{"./constants":"C:\\ProjWS\\am-barcode-app\\app\\js\\constants.js","./controllers":"C:\\ProjWS\\am-barcode-app\\app\\js\\controllers\\index.js","./directives":"C:\\ProjWS\\am-barcode-app\\app\\js\\directives\\index.js","./factories":"C:\\ProjWS\\am-barcode-app\\app\\js\\factories\\index.js","./filters":"C:\\ProjWS\\am-barcode-app\\app\\js\\filters\\index.js","./on_config":"C:\\ProjWS\\am-barcode-app\\app\\js\\on_config.js","./on_run":"C:\\ProjWS\\am-barcode-app\\app\\js\\on_run.js","./services":"C:\\ProjWS\\am-barcode-app\\app\\js\\services\\index.js"}],"C:\\ProjWS\\am-barcode-app\\app\\js\\on_config.js":[function(require,module,exports){
'use strict';

OnConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
function OnConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
}

exports.default = OnConfig;

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\on_run.js":[function(require,module,exports){
'use strict';

OnRun.$inject = ["$ionicPlatform"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
function OnRun($ionicPlatform) {
  'ngInject';

  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

exports.default = OnRun;

},{}],"C:\\ProjWS\\am-barcode-app\\app\\js\\services\\index.js":[function(require,module,exports){
'use strict';

//import angular from 'angular';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var servicesModule = angular.module('starter.services', []);

var services = ({});

Object.keys(services).forEach(function (key) {
  var item = services[key];

  servicesModule.service(item.name, item.fn);
});

exports.default = servicesModule;

},{}]},{},["C:\\ProjWS\\am-barcode-app\\app\\js\\main.js"])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29uc3RhbnRzLmpzIiwiYXBwL2pzL2NvbnRyb2xsZXJzL0FjY291bnRDdHJsLmpzIiwiYXBwL2pzL2NvbnRyb2xsZXJzL0NoYXRzL0NoYXREZXRhaWxDdHJsLmpzIiwiYXBwL2pzL2NvbnRyb2xsZXJzL0NoYXRzL0NoYXRzQ3RybC5qcyIsImFwcC9qcy9jb250cm9sbGVycy9EYXNoQ3RybC5qcyIsImFwcC9qcy9jb250cm9sbGVycy9hcHAvanMvY29udHJvbGxlcnMvaW5kZXguanMiLCJhcHAvanMvZGlyZWN0aXZlcy9pbmRleC5qcyIsImFwcC9qcy9mYWN0b3JpZXMvQ2hhdHMuanMiLCJhcHAvanMvZmFjdG9yaWVzL2luZGV4LmpzIiwiYXBwL2pzL2ZpbHRlcnMvaW5kZXguanMiLCJhcHAvanMvbWFpbi5qcyIsImFwcC9qcy9vbl9jb25maWcuanMiLCJhcHAvanMvb25fcnVuLmpzIiwiYXBwL2pzL3NlcnZpY2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztFQUMzQyxPQUFPOztBQURULElBQU0sY0FBYztFQUNsQixVQUFVO0VBQ1YsUUFBUTs7O0FBTVYsUUFBUSxVQUhPOzBnQkFJMmY7O0FDWDFnQjs7O0FBR0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztFQUMzQyxPQUFPOztBQURULFNBQVMsWUFBWSxRQUFRO0VBQzNCLE9BQU8sV0FBVztJQUNoQixlQUFlOzs7O0FBSW5CLFlBQVksVUFBVSxDQUFDOztBQUt2QixRQUFRLFVBRk87RUFDYixNQUFNO0VBQ04sSUFBSTs7azRCQUk0M0I7O0FDcEJsNEI7OztBQUdBOztBQUVBLE9BQU8sZUFBZSxTQUFTLGNBQWM7RUFDM0MsT0FBTzs7QUFGVCxTQUFTLGdCQUFnQixRQUFRLGNBQWMsT0FBTzs7RUFFcEQsT0FBTyxPQUFPLE1BQU0sSUFB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c0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEFwcFNldHRpbmdzID0ge1xuICBhcHBUaXRsZTogJ9Ch0LDQtNGLINCf0YDQuNC80L7RgNGM0Y8nLFxuICBhcGlVcmw6ICcvYXBpL3YxJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwU2V0dGluZ3M7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgQW5kcmV5TWF6bnlhayBvbiAwMy4wOS4yMDE2LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEFjY291bnRDdHJsKCRzY29wZSkge1xuICAkc2NvcGUuc2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlRnJpZW5kczogdHJ1ZVxuICB9O1xufVxuXG5BY2NvdW50Q3RybC4kaW5qZWN0ID0gW1wiJHNjb3BlXCJdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0FjY291bnRDdHJsJyxcbiAgZm46IEFjY291bnRDdHJsXG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgQW5kcmV5TWF6bnlhayBvbiAwMy4wOS4yMDE2LlxuICovXG4ndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBDaGF0c0RldGFpbEN0cmwoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIGNoYXRzKSB7XG5cbiAgJHNjb3BlLmNoYXQgPSBjaGF0cy5nZXQoJHN0YXRlUGFyYW1zLmNoYXRJZCk7XG5cbn1cblxuQ2hhdHNEZXRhaWxDdHJsLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCIkc3RhdGVQYXJhbXNcIiwgXCJjaGF0c1wiXTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDaGF0c0RldGFpbEN0cmwnLFxuICBmbjogQ2hhdHNEZXRhaWxDdHJsXG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgQW5kcmV5TWF6bnlhayBvbiAwMy4wOS4yMDE2LlxuICovXG4ndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBDaGF0c0N0cmwoJHNjb3BlLCBjaGF0cykge1xuICAvLyBXaXRoIHRoZSBuZXcgdmlldyBjYWNoaW5nIGluIElvbmljLCBDb250cm9sbGVycyBhcmUgb25seSBjYWxsZWRcbiAgLy8gd2hlbiB0aGV5IGFyZSByZWNyZWF0ZWQgb3Igb24gYXBwIHN0YXJ0LCBpbnN0ZWFkIG9mIGV2ZXJ5IHBhZ2UgY2hhbmdlLlxuICAvLyBUbyBsaXN0ZW4gZm9yIHdoZW4gdGhpcyBwYWdlIGlzIGFjdGl2ZSAoZm9yIGV4YW1wbGUsIHRvIHJlZnJlc2ggZGF0YSksXG4gIC8vIGxpc3RlbiBmb3IgdGhlICRpb25pY1ZpZXcuZW50ZXIgZXZlbnQ6XG4gIC8vXG4gIC8vJHNjb3BlLiRvbignJGlvbmljVmlldy5lbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgLy99KTtcblxuICAkc2NvcGUuY2hhdHMgPSBjaGF0cy5hbGwoKTtcbiAgJHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKGNoYXQpIHtcbiAgICBjaGF0cy5yZW1vdmUoY2hhdCk7XG4gIH07XG59XG5cbkNoYXRzQ3RybC4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiY2hhdHNcIl07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ2hhdHNDdHJsJyxcbiAgZm46IENoYXRzQ3RybFxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFuZHJleU1hem55YWsgb24gMDMuMDkuMjAxNi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gRGFzaEN0cmwoJHNjb3BlKSB7XG5cblxuXG5jb25zb2xlLmxvZygnaGVsbG8nKTtcblxuXG5cbn1cblxuRGFzaEN0cmwuJGluamVjdCA9IFtcIiRzY29wZVwiXTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXNoQ3RybCcsXG4gIGZuOiBEYXNoQ3RybFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL2ltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuY29uc3QgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5jb25zdCBjb250cm9sbGVyc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdzdGFydGVyLmNvbnRyb2xsZXJzJywgW10pO1xuXG5jb25zdCBjb250cm9sbGVycyA9IGJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqaW5kZXh8Ki5zcGVjKS5qcyddKTtcbmNvbnNvbGUubG9nKF9fZGlybmFtZSk7XG5mdW5jdGlvbiByZWdpc3RlckNvbnRyb2xsZXJzKGNvbnRyb2xsZXJzKXtcbiAgT2JqZWN0LmtleXMoY29udHJvbGxlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGxldCBpdGVtID0gY29udHJvbGxlcnNba2V5XTtcbiAgICBpZighaXRlbS5uYW1lIHx8ICFpdGVtLmZuKXtcbiAgICAgIHJlZ2lzdGVyQ29udHJvbGxlcnMoaXRlbSk7XG4gICAgfWVsc2V7XG4gICAgICBjb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKGl0ZW0ubmFtZSwgaXRlbS5mbik7XG4gICAgfVxuICB9KTtcbn1cbnJlZ2lzdGVyQ29udHJvbGxlcnMoY29udHJvbGxlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyc01vZHVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmNvbnN0IGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxuY29uc3QgZGlyZWN0aXZlc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdzdGFydGVyLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBidWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKmluZGV4fCouc3BlYykuanMnXSk7XG5cbk9iamVjdC5rZXlzKGRpcmVjdGl2ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICBsZXQgaXRlbSA9IGRpcmVjdGl2ZXNba2V5XTtcblxuICBkaXJlY3RpdmVzTW9kdWxlLmRpcmVjdGl2ZShpdGVtLm5hbWUsIGl0ZW0uZm4pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZXNNb2R1bGU7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgQW5kcmV5TWF6bnlhayBvbiAwMy4wOS4yMDE2LlxuICovXG4ndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBjaGF0cygpIHtcblxuICAvLyBNaWdodCB1c2UgYSByZXNvdXJjZSBoZXJlIHRoYXQgcmV0dXJucyBhIEpTT04gYXJyYXlcblxuICAvLyBTb21lIGZha2UgdGVzdGluZyBkYXRhXG4gIGNvbnN0IGNoYXRzID0gW3tcbiAgICBpZDogMCxcbiAgICBuYW1lOiAnQmVuIFNwYXJyb3cnLFxuICAgIGxhc3RUZXh0OiAnWW91IG9uIHlvdXIgd2F5PycsXG4gICAgZmFjZTogJ2ltZy9iZW4ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ01heCBMeW54JyxcbiAgICBsYXN0VGV4dDogJ0hleSwgaXRcXCdzIG1lJyxcbiAgICBmYWNlOiAnaW1nL21heC5wbmcnXG4gIH0sIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnQWRhbSBCcmFkbGV5c29uJyxcbiAgICBsYXN0VGV4dDogJ0kgc2hvdWxkIGJ1eSBhIGJvYXQnLFxuICAgIGZhY2U6ICdpbWcvYWRhbS5qcGcnXG4gIH0sIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnUGVycnkgR292ZXJub3InLFxuICAgIGxhc3RUZXh0OiAnTG9vayBhdCBteSBtdWtsdWtzIScsXG4gICAgZmFjZTogJ2ltZy9wZXJyeS5wbmcnXG4gIH0sIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiAnTWlrZSBIYXJyaW5ndG9uJyxcbiAgICBsYXN0VGV4dDogJ1RoaXMgaXMgd2lja2VkIGdvb2QgaWNlIGNyZWFtLicsXG4gICAgZmFjZTogJ2ltZy9taWtlLnBuZydcbiAgfV07XG5cbiAgcmV0dXJue1xuICAgIGFsbDooKT0+e1xuICAgICAgcmV0dXJuIGNoYXRzO1xuICAgIH0sXG4gICAgcmVtb3ZlOihjaGF0KT0+e1xuICAgICAgY2hhdHMuc3BsaWNlKGNoYXRzLmluZGV4T2YoY2hhdCksIDEpO1xuICAgIH0sXG4gICAgZ2V0OihjaGF0SWQpPT57XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGF0c1tpXS5pZCA9PT0gcGFyc2VJbnQoY2hhdElkKSkge1xuICAgICAgICAgIHJldHVybiBjaGF0c1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgfTtcbn1cblxuY2hhdHMuJGluamVjdCA9IFtdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NoYXRzJyxcbiAgZm46IGNoYXRzXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5jb25zdCBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbmNvbnN0IHNlcnZpY2VzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuZmFjdG9yaWVzJywgW10pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IGJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqaW5kZXh8Ki5zcGVjKS5qcyddKTtcbmNvbnNvbGUubG9nKHNlcnZpY2VzKTtcbk9iamVjdC5rZXlzKHNlcnZpY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgbGV0IGl0ZW0gPSBzZXJ2aWNlc1trZXldO1xuXG4gIHNlcnZpY2VzTW9kdWxlLmZhY3RvcnkoaXRlbS5kZWZhdWx0Lm5hbWUsIGl0ZW0uZGVmYXVsdC5mbik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZXNNb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5jb25zdCBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbmNvbnN0IGZpbHRlcnNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnc3RhcnRlci5maWx0ZXJzJywgW10pO1xuXG5jb25zdCBmaWx0ZXJzID0gYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCppbmRleHwqLnNwZWMpLmpzJ10pO1xuXG5PYmplY3Qua2V5cyhmaWx0ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgbGV0IGl0ZW0gPSBmaWx0ZXJzW2tleV07XG5cbiAgZmlsdGVyc01vZHVsZS5maWx0ZXIoaXRlbS5uYW1lLCBpdGVtLmZuKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJzTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL2ltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vaW1wb3J0ICdhbmd1bGFyLXVpLXJvdXRlcic7XG4vLyBpbXBvcnQgJy4vdGVtcGxhdGVzJztcbmltcG9ydCAnLi9maWx0ZXJzJztcbmltcG9ydCAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgJy4vZmFjdG9yaWVzJztcbmltcG9ydCAnLi9jb250cm9sbGVycyc7XG4vLyBjcmVhdGUgYW5kIGJvb3RzdHJhcCBhcHBsaWNhdGlvblxuY29uc3QgcmVxdWlyZXMgPSBbXG4gICdpb25pYycsXG4gICAgLy8gJ3JlYWN0JyxcbiAgICAvLyAnbmdTYWlscycsXG4gICAgLy8gJ25nQ29udGV4dE1lbnUnLFxuICAgIC8vICd1aS50cmVlJyxcbiAgICAvLyAndWkucm91dGVyJyxcbiAgICAvLyAndWkuYm9vdHN0cmFwJyxcbiAgICAvLyAnbW9ub3NwYWNlZC5lbGFzdGljJyxcbiAgICAvLyAvLyd2Y1JlY2FwdGNoYScsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICAgIC8vICd1aS5zZWxlY3QnLFxuICAgIC8vIC8vJ3Nob3BwaW5wYWwubW9iaWxlLW1lbnUnLFxuICAgIC8vICduZ0FuaW1hdGUnLFxuICAgIC8vICdMb2NhbFN0b3JhZ2VNb2R1bGUnLFxuICAgIC8vICd0ZW1wbGF0ZXMnLFxuICAgIC8vICd1aUdtYXBnb29nbGUtbWFwcycsXG4gICAgLy8gJ2hjLm1hcmtlZCcsXG4gICAgLy8gLy8gJ0J1RGlyZWN0aXZlcycsXG4gICAgJ3N0YXJ0ZXIuZmFjdG9yaWVzJyxcbiAgICAnc3RhcnRlci5maWx0ZXJzJyxcbiAgICAnc3RhcnRlci5zZXJ2aWNlcycsXG4gICAgJ3N0YXJ0ZXIuY29udHJvbGxlcnMnLFxuICAgICdzdGFydGVyLmRpcmVjdGl2ZXMnXG5dO1xuXG4vLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbmNvbnN0IGFwcCA9IHdpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnc3RhcnRlcicsIHJlcXVpcmVzKTtcblxuYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXInKS5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cycpKTtcblxuLy9cbmFuZ3VsYXIubW9kdWxlKCdzdGFydGVyJykuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykuZGVmYXVsdCk7XG4vL1xuLy9cbi8vXG5hbmd1bGFyLm1vZHVsZSgnc3RhcnRlcicpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpLmRlZmF1bHQpO1xuXG4vLyBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydzdGFydGVyJ10sIHtcbi8vICAgICAgIHN0cmljdERpOiB0cnVlXG4vLyB9KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIElvbmljIHVzZXMgQW5ndWxhclVJIFJvdXRlciB3aGljaCB1c2VzIHRoZSBjb25jZXB0IG9mIHN0YXRlc1xuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlclxuICAvLyBTZXQgdXAgdGhlIHZhcmlvdXMgc3RhdGVzIHdoaWNoIHRoZSBhcHAgY2FuIGJlIGluLlxuICAvLyBFYWNoIHN0YXRlJ3MgY29udHJvbGxlciBjYW4gYmUgZm91bmQgaW4gY29udHJvbGxlcnMuanNcbiAgJHN0YXRlUHJvdmlkZXJcblxuICAvLyBzZXR1cCBhbiBhYnN0cmFjdCBzdGF0ZSBmb3IgdGhlIHRhYnMgZGlyZWN0aXZlXG4gICAgLnN0YXRlKCd0YWInLCB7XG4gICAgICB1cmw6ICcvdGFiJyxcbiAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGFicy5odG1sJ1xuICAgIH0pXG5cbiAgICAvLyBFYWNoIHRhYiBoYXMgaXRzIG93biBuYXYgaGlzdG9yeSBzdGFjazpcblxuICAgIC5zdGF0ZSgndGFiLmRhc2gnLCB7XG4gICAgICB1cmw6ICcvZGFzaCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAndGFiLWRhc2gnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGFiLWRhc2guaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC5zdGF0ZSgndGFiLmNoYXRzJywge1xuICAgICAgdXJsOiAnL2NoYXRzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICd0YWItY2hhdHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGFiLWNoYXRzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdDaGF0c0N0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgndGFiLmNoYXQtZGV0YWlsJywge1xuICAgICAgdXJsOiAnL2NoYXRzLzpjaGF0SWQnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ3RhYi1jaGF0cyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jaGF0LWRldGFpbC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhdERldGFpbEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLnN0YXRlKCd0YWIuYWNjb3VudCcsIHtcbiAgICAgIHVybDogJy9hY2NvdW50JyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICd0YWItYWNjb3VudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90YWItYWNjb3VudC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnQWNjb3VudEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvdGFiL2Rhc2gnKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBPbkNvbmZpZztcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gT25SdW4oJGlvbmljUGxhdGZvcm0pIHtcbiAgJ25nSW5qZWN0JztcblxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT25SdW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5jb25zdCBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbmNvbnN0IHNlcnZpY2VzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuc2VydmljZXMnLCBbXSk7XG5cbmNvbnN0IHNlcnZpY2VzID0gYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCppbmRleHwqLnNwZWMpLmpzJ10pO1xuXG5PYmplY3Qua2V5cyhzZXJ2aWNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gIGxldCBpdGVtID0gc2VydmljZXNba2V5XTtcblxuICBzZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKGl0ZW0ubmFtZSwgaXRlbS5mbik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZXNNb2R1bGU7XG4iXX0=
