'use strict';

angular.module('firebaseJsAngularModuleApp')
  .service('FirebaseJs', function FirebaseJs() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log('Running the FirebaseJs service constructor');

    this.Firebase = function FirebaseFakeConstructor(url) {
      console.log('Runnning constructor with url: ' + url);
      this.url = url;
    };

    this.FirebaseJs = function FirebaseRealConstructor() {
      /* jshint ignore:start */
      @@include('../../bower_components/firebase/firebase.js');
      /* jshint ignore:end */ 
    };
  });
