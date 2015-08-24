define(['showcase/module'], function (module) {
  'use strict';

  module.registerController('BottomSheetCtrl', ['$scope', '$timeout', '$mdBottomSheet', 
    function ($scope, $timeout, $mdBottomSheet) {
    
    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/showcase/views/bottom-sheet-list.tpl.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function (clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };

    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/showcase/views/bottom-sheet-grid.tpl.html',
        controller: 'GridBottomSheetCtrl',
        targetEvent: $event
      }).then(function (clickedItem) {
        $scope.alert = clickedItem.name + ' clicked';
      })
    }

  }]);

  module.registerController('ListBottomSheetCtrl', ['$scope', '$mdBottomSheet',
    function($scope, $mdBottomSheet) {

    $scope.items = [
      { name: 'Share', icon: 'share-arrow' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' }
    ];

    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    }

  }]);

  module.registerController('GridBottomSheetCtrl', ['$scope', '$mdBottomSheet',
    function($scope, $mdBottomSheet) {

    $scope.items = [
      { name: 'Hangout', icon: 'hangout' },
      { name: 'Mail', icon: 'mail' },
      { name: 'Message', icon: 'message' },
      { name: 'Copy', icon: 'copy2' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'Twitter', icon: 'twitter' }
    ];

    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    }

  }]);
})