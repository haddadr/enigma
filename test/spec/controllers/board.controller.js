'use strict';

describe('Controller: BoardControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('enigma'));

  var BoardControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardControllerCtrl = $controller('BoardControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BoardControllerCtrl.awesomeThings.length).toBe(3);
  });
});
