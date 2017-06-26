'use strict';

describe('Service: balance.service', function () {

  // load the service's module
  beforeEach(module('enigma'));

  // instantiate service
  var balance.service;
  beforeEach(inject(function (_balance.service_) {
    balance.service = _balance.service_;
  }));

  it('should do something', function () {
    expect(!!balance.service).toBe(true);
  });

});
