/* global Provider */
Provider.directive('ngl-model', function () {
  'use strict';
  
  return {
    priority: 1,
    link:  function (scope, el, attrs, exp) {
      el.value = scope.$eval(exp);
      el.onkeyup = function () {
        // 字符串类型
        scope.$eval(exp + '="' + el.value+'"');
        scope.$digest();
      };
      scope.$watch(exp, function (val) {
        el.value = val;
      });
    }
  };
});
