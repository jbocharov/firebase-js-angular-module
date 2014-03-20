'use strict';

/* global Firebase */
/* global window */
describe('Service: firebaseJs', function () {

  // load the service's module
  beforeEach(module('firebaseJsAngularModuleApp'));

  // instantiate service
  var firebaseJs;
  beforeEach(inject(function (FirebaseJs) {
    firebaseJs = FirebaseJs;
  }));

  it('should inject a FirebaseJs service object', function () {
    expect(!!firebaseJs).toBe(true);
  });

  it('should expose a Firebase constructor', function () {
    var url = 'https://my.firebaseio.com';
    var instance = new firebaseJs.Firebase(url);
    expect(typeof instance).toBe('object'); 
  });

  it('should iniatialize the Firebase local variable', function () {
    var Firebase = firebaseJs.getFirebase();

    expect(!!Firebase).toBe(true);
    console.log(Firebase);
  });

});
