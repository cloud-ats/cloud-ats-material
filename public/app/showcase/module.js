define([
  'angular', 
  'angular-couch-potato', 
  'angular-ui-router'
], function (ng, couchPotato) {
  
  'use strict';

  var module = ng.module('app.showcase', ['ui.router']);

  module.config(['$stateProvider', '$couchPotatoProvider', function($stateProvider, $couchPotatoProvider) {
    $stateProvider
    .state('app.showcase', {
      url: '/showcase',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/showcase.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
            ])
          }
        }
      }, data: {
        title: 'Showcase'
      }
    })
  }]);

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
});