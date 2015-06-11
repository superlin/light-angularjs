 /*exported Utils */
 
var Utils = {
  equals: function (a, b) {
    'use strict';
    
    return JSON.stringify(a) === JSON.stringify(b);
  },
  clone: function (a) {
    'use strict';
    
    try {
      return JSON.parse(JSON.stringify(a));
    } catch (e) {
      return undefined;
    }
  },
  isFunction: function (obj) {
    'use strict';
    
    return {}.toString.call(obj) === '[object Function]';  
  },
  noop: function () {
    'use strict';
  }
};
