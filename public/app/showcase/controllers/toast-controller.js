define(['showcase/module'], function (module) {

	module.registerController('AppCtrl', ['$scope', '$mdToast', '$document', function ($scope, $mdToast, $document) {

		var last = {bottom: false, top: true, left: false, right: true};

		$scope.toastPosition = angular.extend({}, last);
		$scope.getToastPosition = function () {
			sanitizePosition();
			return Object.keys($scope.toastPosition).filter(function(pos) {
				return $scope.toastPosition[pos];
			}).join(' ');
		}

		var sanitizePosition = function () {
			var current = $scope.toastPosition;
			if (current.bottom && last.top) current.top = false;
			if (current.top && last.bottom) current.bottom = false;
			if (current.right && last.left) current.left = false;
			if (current.left && last.right) current.right = false; 
			last = angular.extend({}, current);
		}

		$scope.showCustomToast = function () {
			$mdToast.show({
				controller: 'ToastCtrl',
				templateUrl: 'app/showcase/views/toast-template.tpl.html',
				parent: $document[0].querySelector('#toastBounds'),
				hideDelay: 6000,
				position: $scope.getToastPosition()
			});
		}

		$scope.showActionToast = function () {
			$mdToast.show($mdToast.simple().textContent('Simple Toast').position($scope.getToastPosition()).hideDelay(3000));
		}
		$scope.showSimpleToast = function() {
	    $mdToast.show(
	      $mdToast.simple()
	        .textContent('Simple Toast!')
	        .position($scope.getToastPosition())
	        .hideDelay(3000)
	    );
	  };
		$scope.showActionToast = function () {
			var toast = $mdToast.simple().textContent('Action Toast!').action('OK').highlightAction(false).position($scope.getToastPosition());
			console.log(toast);
			$mdToast.show(toast).then(function(response) {
				if (response == 'ok') {
					alert('You clicked \'OK\'.');
				}
			});
		}

	}]).registerController('ToastCtrl', function ($scope, $mdToast) {
		$scope.closeToast = function () {
			$mdToast.hide();
		}
	});
})