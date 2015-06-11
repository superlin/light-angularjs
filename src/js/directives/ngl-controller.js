/* global Provider */
Provider.directive('ngl-controller', function () {
  'use strict';
  
  return {
    scope: true,
    priority: 500,
    controller: '='
  };
});
