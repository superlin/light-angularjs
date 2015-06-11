/* global Provider */
Provider.service('$setTimeout', function ($rootScope) {
  'use strict';
  
  return function (fn, timeout) {
    setTimeout(function () {
      fn();
      $rootScope.$digest();
    }, timeout);
  };
});
