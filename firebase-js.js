'use strict';

angular.module('firebaseJsAngularModuleApp')
  .service('FirebaseJs', function FirebaseJs() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var windowObj = window;

    var windowHadFirebase = windowObj.hasOwnProperty('Firebase');
    var windowDotFirebase = windowHadFirebase ? windowObj.Firebase : undefined;

    function bindToWindow(func) {
      return func.bind(windowObj);
    }

    /* jshint ignore:start */

    /* 
        Clever hack: the firebase.js library is of the form:
        (function() { var x = this; x.navigator... })();

        The tricky part is that it relies on this === window inside the IIFE.

        To accompsish, the straightforward way is to to write:
        (function() { this.navigator... }).bind(this)();

        However, this would require modifying the included firebase.js library,
        when it is more desirable to include it as a coherent code block.

        This code accomplishes both goals, and the () intended as the wrapper
        for turning the IIFE into and expression instead of a naked function
        becomes a call to bindToWindow. The trailing () become the invocation 
        of the window-bound version of the function returned by bindToWindow.

        This is a hack because if the library authors use a different operator
        to make it an IIFE, then this approach breaks.

        bindToWindow(function() { this.navigator... })();

     */

    bindToWindow
    @@include('app/bower_components/firebase/firebase.js');
    /* jshint ignore:end */ 

    this.Firebase = windowObj.Firebase;

    if (windowHadFirebase) {
      windowObj.Firebase = windowDotFirebase;
    } else {
      delete windowObj.Firebase;
    }
  });
