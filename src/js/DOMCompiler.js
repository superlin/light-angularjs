/* global Provider, document, Utils */

var DOMCompiler = DOMCompiler || (function () {
  'use strict';
  
  return {
    bootstrap: function () {
      this.compile(document.children[0],
        Provider.get('$rootScope'));
    },
    compile: function (el, scope) {
      var dirs = this._getElDirectives(el);
      var attrs = el.attributes;
      // 有一个指令需要创建scope，则共享子scope，不支持独立scope
      var needNewScope = dirs.some(function (ele) { return ele.scope; });
      scope = needNewScope ? scope.$new() : scope;
      
      // 按优先级降序排列
      dirs.sort(function (a, b) {
        var pa = a.priority = a.priority || 0;
        var pb = b.priority = b.priority || 0;
        return pb - pa;
      }).forEach(function (d) {
        var link, ctrl;

        var dir = Provider.get(d.name + Provider.DIRECTIVES_SUFFIX);
        // 插入模板
        if (dir.template) {
          el.innerHTML = dir.template;
        }
        // compile
        link = (dir.compile || Utils.noop)(el, attrs);
        
        // controller
        ctrl = dir.controller;
        if (ctrl) {
          // 嵌入的controller
          if (Utils.isFunction(ctrl)) {
            ctrl = Provider.invoke(ctrl, { $scope: scope });
          } else {
            // 处理绑定（只有=）
            if (ctrl === '=') {
              ctrl = d.value;
            }
            ctrl = Provider.get(ctrl + Provider.CONTROLLERS_SUFFIX);
            ctrl = Provider.invoke(ctrl, { $scope: scope });
          }
        }
        // link（compile返回的link会覆盖原有的link）
        (link || dir.link || Utils.noop)(scope, el, attrs, d.value, ctrl);
      });
      [].slice.call(el.children).forEach(function (c) {
        this.compile(c, scope);
      }, this);
    },
    _getElDirectives: function (el) {
      var attrs = el.attributes;
      var result = [];
      for (var i = 0; i < attrs.length; i += 1) {
        if (Provider.get(attrs[i].name + Provider.DIRECTIVES_SUFFIX)) {
          result.push({
            name: attrs[i].name,
            value: attrs[i].value
          });
          // 只要有一个需要创建scope，则共享scope
        }
      }
      return result;
    }
  };
} ());

window.onload = function () {
  'use strict';
  
  DOMCompiler.bootstrap();
};
