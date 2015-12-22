define(['showcase/module'], function (module) {

	module.registerController('TooltipCtrl', ['$scope', function ($scope) {
		
		$scope.demo = {
	    showTooltip : false,
	    tipDirection : ''
	  };

	  $scope.$watch('demo.tipDirection',function(val) {
	    if (val && val.length ) {
	      $scope.demo.showTooltip = true;
	    }
	  })
	}]);
})