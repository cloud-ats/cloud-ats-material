define(['showcase/module'], function (module) {
  'use strict';

  module.registerController('FabSpeedDialCtrl', function() {
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];
    this.isOpen = false;
    this.availabelModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';
    this.availabelDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'up';
  })
});