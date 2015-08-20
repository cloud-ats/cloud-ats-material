'use strict';

define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-animate'
], function (ng, couchPotato) {

  var app = ng.module('app', [
    'scs.couch-potato',
    'ngAnimate',
    'ui.router',

    'app.layout',
    'app.showcase'
  ]);

  couchPotato.configureApp(app);

  app.run(['$couchPotato', '$rootScope', '$state', '$stateParams', 
    function($couchPotato, $rootScope, $state, $stateParams) {
      app.lazy = $couchPotato;
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }]);

  return app;
})