'use strict';

/**
 * @ngdoc service
 * @name enigma.balance.service
 * @description
 * # balance.service
 * Service in the enigma.
 */
angular.module('enigma').service('balanceService', balanceService);
function balanceService(){
  var iterationCount = 0;
  function sum(sum, ball){
    return sum + ball.weight;
  }
  this.reset = function(){
    iterationCount = 0;
  }
  this.getIterationCount = function(){
    return iterationCount;
  }
  /**
   * 0 -> left is heavier
   * 1 -> right is heavier
   * 2 -> left and right are equal
   */

  this.weigh = function(left, right){
    iterationCount ++;
    var leftWeight = _.reduce(left, sum, 0);
    var rightWeight = _.reduce(right, sum, 0);
    if( leftWeight > rightWeight){
      return 0;
    } else if(leftWeight < rightWeight){
      return 1;
    }else{
      return 2;
    }
  };
}
