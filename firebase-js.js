'use strict';

angular.module('firebaseJsAngularModuleApp')
  .service('FirebaseJs', function FirebaseJs() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log('Running the FirebaseJs service constructor');
    var Firebase;

    var restoreWindowDotFirebase = (function () {
      function deleteWindowDotFirebase () { delete window.Firebase };

      if (! window.hasOwnProperty('Firebase')) { 
        return deleteWindowDotFirebase; 
      }
      
      var originalWindowDotFirebase = window.Firebase;
      deleteWindowDotFirebase();
      return function restoreWindowDotFirebase() {
          window.Firebase = originalWindowDotFirebase;
      };
    })();

    function bindToWindow(func) {
      return func.bind(window);
    }

    /* jshint ignore:start */
    bindToWindow
    @@include('app/bower_components/firebase/firebase.js');
    /* jshint ignore:end */ 

    console.log('window.Firebase', window.Firebase);
    this.Firebase = window.Firebase;

    restoreWindowDotFirebase();
    this.getFirebase = function () { return this.Firebase; }
  });
