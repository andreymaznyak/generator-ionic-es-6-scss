'use strict';

//import angular from 'angular';
const bulk = require('bulk-require');

const servicesModule = angular.module('starter.factories', []);

const services = bulk(__dirname, ['./**/!(*index|*.spec).js']);
console.log(services);
Object.keys(services).forEach((key) => {
  let item = services[key];

  servicesModule.factory(item.default.name, item.default.fn);
});

export default servicesModule;
