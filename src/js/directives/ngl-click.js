/* global Provider */
Provider.directive('ngl-click', function () {
  'use strict';
  
  return {
    link: function (scope, el, attrs, exp) {
      el.onclick = function () {
        scope.$eval(exp);
        scope.$digest();
      };
    }
  };
});
