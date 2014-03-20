'use strict';

angular.module('firebaseJsAngularModuleApp')
  .service('FirebaseJs', function FirebaseJs() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var windowObj = window;

    var restoreWindowDotFirebase = (function () {
      function deleteWindowDotFirebase () { delete windowObj.Firebase };

      if (! windowObj.hasOwnProperty('Firebase')) { 
        return deleteWindowDotFirebase; 
      }
      
      var originalWindowDotFirebase = windowObj.Firebase;
      deleteWindowDotFirebase();
      return function restoreWindowDotFirebase() {
          windowObj.Firebase = originalWindowDotFirebase;
      };
    })();

    function bindToWindow(func) {
      console.log('func', func);
      console.log('func.bind', func.bind);
      var bind = Function.prototype.bind;
      console.log('bind', bind);
      var boundToWindowObj = func.bind(windowObj);
      console.log('boundToWindowObj', boundToWindowObj);
      return boundToWindowObj;
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

    restoreWindowDotFirebase();

    this.getFirebase = function () { return this.Firebase; }
  });
