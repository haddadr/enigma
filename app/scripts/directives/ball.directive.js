'use strict';

/**
 * @ngdoc directive
 * @name enigma.directive:ball
 * @description
 * # ball
 */
angular.module('enigma')
  .directive('ball', function () {
    return {
      templateUrl: '/views/ball.template.html',
      scope : {
        data: '='
      },
      restrict: 'E',
      link: function (scope, element, attrs) {

      }
    };
  });
