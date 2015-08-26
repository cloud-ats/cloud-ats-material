define(['showcase/module'], function (module) {
  'use strict';

  module.registerController('ChipsCtrl', ['$timeout', '$q', function ($timeout, $q) {
    var self = this;
    self.readonly = false;
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
    self.tags = [];
    self.vegObjs = [
      {
        'name': 'Broccoli',
        'type': 'Brassica'
      },
      {
        'name': 'Cabbage',
        'type': 'Brassica'
      },
      {
        'name': 'Carrot',
        'type': 'Umbelliferous'
      }
    ];
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      }
    }
  }]);
})