
/**
 * @ngdoc function
 * @name board.controller:BoardController
 * @description Controller to interact with board
 */
(function(){
  'use strict';
  angular.module('enigma').controller('BoardController', BoardController);

  BoardController.$inject = ['balanceService'];

  /** @ngInject */
  function BoardController(balanceService) {
    var boardCtrl = this;
    var number = 0;
    boardCtrl.choose = choose;
    boardCtrl.resolve = resolve;
    boardCtrl.reset = reset;
    initBalls();
    //can be made in a service
    function initBalls(){
      boardCtrl.ballSelected = false;
      number = 0;
      boardCtrl.balls = _.times(8, function(){
        return {number: ++number, weight: 0};
      });
    }

    function reset(){
      initBalls();
      balanceService.reset();
      boardCtrl.solution= undefined;
    }

    function choose(index) {
      initBalls();
      boardCtrl.ballSelected = true;
      boardCtrl.balls[index].weight = 1;
    }

    function resolve(){
      balanceService.reset();
      var chunk = 3;
      var balls = angular.copy(boardCtrl.balls);
      while (balls.length > 1 && chunk > 0) {
        balls = _.chunk(balls, chunk);
        balls = balls[balanceService.weigh(balls[0], balls[1])];
        chunk = chunk - 2;
      }
      boardCtrl.solution = {heaviestBall: balls[0].number, iterations : balanceService.getIterationCount()};
    }

  }
})();
