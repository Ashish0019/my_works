'use strict';

/**
 * @ngdoc overview
 * @name sampleTestApp
 * @description
 * # sampleTestApp
 *
 * Main module of the application.
 */
angular
  .module('sampleTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'ui.bootstrap',
    'rzModule',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'work'
      })
      .otherwise({
        redirectTo: '/work'
      });
  });
