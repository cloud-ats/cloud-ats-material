define(['showcase/module'], function (module) {
	'use strict';

	module.registerController('fabToolBarCtrl', ['$scope', function ($scope) {
		$scope.isOpen = false;
		$scope.demo = {
			isOpen: false,
			count: 0,
			selectedDirection : 'left'
		}

	}]);
})