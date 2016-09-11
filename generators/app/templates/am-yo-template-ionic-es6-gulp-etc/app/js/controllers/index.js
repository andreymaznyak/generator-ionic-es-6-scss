'use strict';

//import angular from 'angular';
const bulk = require('bulk-require');

const controllersModule = angular.module('starter.controllers', []);

const controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);
console.log(__dirname);
function registerControllers(controllers){
  Object.keys(controllers).forEach((key) => {
    let item = controllers[key];
    if(!item.name || !item.fn){
      registerControllers(item);
    }else{
      controllersModule.controller(item.name, item.fn);
    }
  });
}
registerControllers(controllers);

export default controllersModule;
