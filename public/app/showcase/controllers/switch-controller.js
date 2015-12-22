define(['showcase/module'], function (module) {

	'use strict';
	module.registerController('SwitchCtrl', ['$scope', function ($scope) {
		$scope.data = {
	    cb1: true,
	    cb4: true,
	    cb5: false
	  };
	  $scope.message = 'false';
	  $scope.onChange = function(cbState) {
	  	$scope.message = cbState;
	  };
	}]);
})