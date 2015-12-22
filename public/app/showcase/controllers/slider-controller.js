define(['showcase/module'], function (module) {

	module.registerController('SliderCtrl', ['$scope', function ($scope) {

		$scope.color = {
			red: Math.floor(Math.random() * 255),
			green: Math.floor(Math.random() * 255),
			blue: Math.floor(Math.random() * 255)
		}

		console.log($scope.color);
		$scope.rating1 = 3;
		$scope.rating2 = 2;
		$scope.rating3 = 4;
		$scope.disabled1 = 0;
		$scope.disabled2 = 70;

	}])
})