'use strict';

describe('Service: firebaseJs', function () {

  // load the service's module
  beforeEach(module('firebaseJsAngularModuleApp'));

  // instantiate service
  var firebaseJs;
  beforeEach(inject(function (_firebaseJs_) {
    firebaseJs = _firebaseJs_;
  }));

  it('should do something', function () {
    expect(!!firebaseJs).toBe(true);
  });

});
