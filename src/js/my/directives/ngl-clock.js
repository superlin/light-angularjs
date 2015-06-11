/* global Provider */

Provider.directive('ngl-clock', function() {
	'use strict';
	
	return {
		template: '<p ngl-bind="count"></p>',
		scope: true,
		controller: 'ClockController'
	};
});