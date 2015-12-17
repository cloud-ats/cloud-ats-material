define(['showcase/module'], function (module) {
	'use strict';

	module.registerController('BasicDemoCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

		var originatorEv;
		this.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		}

		this.notificationsEnabled = true;
		this.toggleNotifications = function () {
			this.notificationsEnabled = !this.notificationsEnabled;

		}

		this.redial = function () {
			$mdDialog.show($mdDialog.targetEvent(originatorEv)
				.clickOutsideToClose(true).parent('body').title('Suddenly, a redial')
				.textContent('You just called a friend; who told you the most amazing story. Have a cookie!').
				ok('That was easy'));

			originatorEv = null;


		}

		this.checkVoicemail = function () {

		}
	}])
	.registerController('PositionDemoCtrl', ['$mdDialog', function ($mdDialog) {

		var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('You clicked!')
          .textContent('You clicked the menu item at index ' + index)
          .ok('Nice')
          .targetEvent(originatorEv)
      );
      originatorEv = null;
    };
	}]);
})