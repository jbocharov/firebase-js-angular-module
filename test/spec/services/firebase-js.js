'use strict';

/* global Firebase */
/* global window */
describe('Service: firebaseJs', function () {

  // load the service's module
  beforeEach(module('firebaseJsAngularModuleApp'));

  // instantiate service
  var Firebase;

  beforeEach(inject(function (FirebaseJs) {
    Firebase = FirebaseJs.Firebase;
  }));

  it('should expose a Firebase member', function () {
    expect(!! Firebase).toBe(true);
  });

  it('should allow a Firebase connection to be created', function () {
    var url = 'https://my.firebaseio.com';
    var instance = new Firebase(url);
    expect(typeof instance).toBe('object'); 
  });

});
