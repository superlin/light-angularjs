/* global Provider */
Provider.directive('ngl-bind', function () {
  'use strict';
  
  return {
    link: function (scope, el, attrs, exp) {
      el.innerHTML = scope.$eval(exp);
      scope.$watch(exp, function (val) {
        el.innerHTML = val;
      });
    }
  };
});
