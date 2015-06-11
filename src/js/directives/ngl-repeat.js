/* global Provider, DOMCompiler */

Provider.directive('ngl-repeat', function () {
  'use strict';
  
  return {
    priority: 1000,
    link: function (scope, el, attrs, exp) {
      var scopes = [];
      var parts = exp.split('in');
      var collectionName = parts[1].trim();
      var itemName = parts[0].trim();
      var parentNode = el.parentNode;

      function render(val) {
        var els = val;
        var currentNode;
        var s;
        while (parentNode.firstChild) {
          parentNode.removeChild(parentNode.firstChild);
        }
        scopes.forEach(function (s) {
          s.$destroy();
        });
        scopes = [];
        els.forEach(function (val) {
          currentNode = el.cloneNode();
          currentNode.removeAttribute('ngl-repeat');
          s = scope.$new();
          scopes.push(s);
          s[itemName] = val;
          DOMCompiler.compile(currentNode, s);
          parentNode.appendChild(currentNode);
        });
      }
      scope.$watch(collectionName, render);
      render(scope.$eval(collectionName));
    }
  };
});
