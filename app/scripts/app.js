'use strict';

/**
 * @ngdoc overview
 * @name enigma
 * @description
 * # enigmaAppApp
 *
 * Main module of the application.
 */
angular
  .module('enigma', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/board');
    $stateProvider.state('board', {
      url : '/board',
      views: {
        'content@': {
          templateUrl: 'views/board.html',
          controller: 'BoardController',
          controllerAs: 'boardCtrl'
        }
      }
    });

  });

