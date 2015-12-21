define(['showcase/module'], function (module) {
	module.registerController('ProgressBarCtrl', ['$scope', '$interval', function ($scope, $interval) {

		var self = this, j = 0; counter = 0;
		self.modes = [];
		self.activated = true;
		self.determinateValue = 30;

		self.toggleActivation = function () {
			if (!self.activated) self.modes = [];
			if (self.activated) j = counter = 0;
		}

		$interval(function() {
			self.determinateValue += 1;
			if (self.determinateValue > 100) {
				self.determinateValue = 30;
			}

			if ((j < 5) && !self.modes[j] && self.activated) {
				self.modes[j] = 'indeterminate'
			}
			if (counter ++ % 4 == 0) j ++;
		}, 100, 0, true);

	}]);
})