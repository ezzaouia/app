var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('euromaster.components', ['ng']);

_.each(controllers, function (controller, name) {
  components.controller(name, controller);
});

_.each(directives, function (directive, name) {
  components.directive(name, directive);
});

_.each(services, function (factory, name) {
  components.factory(name, factory);
});

var app = angular.module('euromaster', ['euromaster.components', 'ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.
  when('/maps', {
    controller: 'EuromapsController',
    //templateUrl: './templates/euromaps.html'
    template: '<euromaps></euromaps>'
  }).
  when('/events', {
    controller: 'EventsController',
    template: '<events></events>'
  })
});