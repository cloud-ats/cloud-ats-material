define([
  'angular', 
  'angular-couch-potato', 
  'angular-ui-router',
  'angular-messages'
], function (ng, couchPotato) {
  
  'use strict';

  var module = ng.module('app.showcase', ['ui.router', 'ngMessages']);

  module.config(['$stateProvider', '$couchPotatoProvider', '$mdIconProvider', 
    function($stateProvider, $couchPotatoProvider, $mdIconProvider) {

    $mdIconProvider
      .icon('share-arrow', 'styles/img/icons/share-arrow.svg', 24)
      .icon('upload', 'styles/img/icons/upload.svg', 24)
      .icon('copy', 'styles/img/icons/copy.svg', 24)
      .icon('print', 'styles/img/icons/print.svg', 24)
      .icon('hangout', 'styles/img/icons/hangout.svg', 24)
      .icon('mail', 'styles/img/icons/mail.svg', 24)
      .icon('message', 'styles/img/icons/message.svg', 24)
      .icon('copy2', 'styles/img/icons/copy2.svg', 24)
      .icon('facebook', 'styles/img/icons/facebook.svg', 24)
      .icon('twitter', 'styles/img/icons/twitter.svg', 24);

    $stateProvider
    .state('app.showcase', {
      url: '/showcase',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/showcase.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/showcase-controller',
              'showcase/controllers/custom-template-controller'
            ])
          }
        }
      }, data: {
        title: 'Showcase'
      }
    })
    .state('app.showcase.bottomsheet', {
      url: '/bottomsheet',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/bottomsheet.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/bottom-sheet-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.button', {
      url: '/button',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/button-basic.tpl.html'
        }
      }
    })
    .state('app.showcase.card', {
      url: '/card',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/card.tpl.html'
        }
      }
    })
    .state('app.showcase.checkbox', {
      url: '/checkbox',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/checkbox.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/checkbox-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.chips', {
      url: '/chips',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/chips.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/chips-controller',
              'showcase/controllers/contact-chips-controller',
              'showcase/controllers/custom-input-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.toolbar',  {
      url: '/toolbar',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/toolbar.tpl.html'
        }
      }
    })
    .state('app.showcase.dialog', {
      url: '/dialog',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/dialog.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/dialog-controller'
            ])
          }
        }
      }
    })
  }]);

  couchPotato.configureApp(module);

  module.run(function($couchPotato, $http, $templateCache) {
    module.lazy = $couchPotato;
    var urls = [
      'styles/img/icons/share-arrow.svg',
      'styles/img/icons/upload.svg',
      'styles/img/icons/copy.svg',
      'styles/img/icons/print.svg',
      'styles/img/icons/hangout.svg',
      'styles/img/icons/mail.svg',
      'styles/img/icons/message.svg',
      'styles/img/icons/copy2.svg',
      'styles/img/icons/facebook.svg',
      'styles/img/icons/twitter.svg'
    ];
    ng.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  });

  return module;
});