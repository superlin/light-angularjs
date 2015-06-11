/* global Provider */

Provider.controller('ClockController', function ($scope, $setInterval) {
	'use strict';
	
	$scope.count = new Date();
	
	$setInterval(function () {
		$scope.count = new Date();
	}, 1000);
});