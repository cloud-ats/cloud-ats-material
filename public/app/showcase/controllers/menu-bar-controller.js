define(['showcase/module'], function (module) {
	module.registerFilter('keyboardShortcut',['$window', function ($window) {
		return function (str) {

			if (!str) return;
      var keys = str.split('-');
      var isOSX = /Mac OS X/.test($window.navigator.userAgent);
      var seperator = (!isOSX || keys.length > 2) ? '+' : '';
      var abbreviations = {
        M: isOSX ? 'Command' : 'Ctrl',
        A: isOSX ? 'Option' : 'Alt',
        S: 'Shift'
      };
      return keys.map(function(key, index) {
        var last = index == keys.length - 1;
        return last ? key : abbreviations[key];
      }).join(seperator);
		}
	}]).registerController('MenuBarCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

		this.settings = {
			printLayout: true,
			showRuler: true,
			showSpellingSuggestions: true,
			presentationMode: 'edit'
		};

		this.sampleAction = function(name, ev) {
			$mdDialog.show($mdDialog.alert().title(name).textContent('You triggered the '+ name+ ' action').ok('Great').targetEvent(ev));
		}
	}])
})