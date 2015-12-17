define(['showcase/module'], function (module) {
	'use strict';

	module.registerController('IconDemoCtrl', ['$scope', function ($scope) {

		var iconData = [
			{name : 'icon-home', color: '#777'},
			{name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
      {name: 'icon-google-plus2', color: "#A00" },
      {name: 'icon-youtube4'    , color:"#00A" },
       // Use theming to color the font-icon
      {name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
		];
		$scope.sizes = [
			{size:48,padding:10},
      {size:36,padding:6},
      {size:24,padding:2},
      {size:12,padding:0}
		];

		$scope.fonts = [].concat(iconData);

	}])
	.registerController('LigatureIcon', ['$scope', function ($scope) {
		var iconData = [
			{name: 'accessibility'  , color: "#777" },
      {name: 'question_answer', color: "rgb(89, 226, 168)" },
      {name: 'backup'         , color: "#A00" },
      {name: 'email'          , color: "#00A" }
		]

		$scope.fontLigas = [].concat(iconData);

		$scope.sizesLigas = [
			{size:"md-18",padding:0},
      {size:"md-24",padding:2},
      {size:"md-36",padding:6},
      {size:"md-48",padding:10}
		];
	}]);
})