'use strict';

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
    var url = 'https://my.firebase.io';
    var instance = new firebaseJs.Firebase(url);
    expect(instance.url).toBe(url); 
  });

});
