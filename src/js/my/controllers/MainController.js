/* global Provider */

Provider.controller('MainController', function ($scope) {
	'use strict';

	$scope.data = {
		name: 'liu'
	};

	$scope.arr = [
		{ name: 'liu' },
		{ name: 'wan' },
		{ name: 'lin' }
	];

	$scope.add = function () {
		$scope.arr.push({
			name: 'new' + Math.random()
		});
	};

});