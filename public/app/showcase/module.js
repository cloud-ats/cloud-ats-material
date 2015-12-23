define([
  'angular', 
  'angular-couch-potato', 
  'angular-ui-router',
  'angular-messages'
], function (ng, couchPotato) {
  
  'use strict';

  var module = ng.module('app.showcase', ['ui.router', 'ngMessages']);

  module.config(['$stateProvider', '$couchPotatoProvider', '$mdIconProvider', '$mdThemingProvider', 
    function($stateProvider, $couchPotatoProvider, $mdIconProvider, $mdThemingProvider) {

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
      .icon('twitter', 'styles/img/icons/twitter.svg', 24)
      .icon('comment', 'stypes/img/icons/ic_comment_24px.svg', 24)
      .icon('photo', 'stypes/img/icons/ic_photo_24px.svg', 24)
      .icon('label', 'stypes/img/icons/ic_label_24px.svg', 24)
      .icon('menu', 'stypes/img/icons/ic_menu_24px.svg', 24)
      .icon('avatar', 'styles/img/icons/avatar-icons.svg', 128)
      .iconSet('social', 'styles/img/icons/sets/social-icons.svg', 24)
      .iconSet('device', 'styles/img/icons/sets/device-icons.svg', 24)
      .iconSet('communication', 'styles/img/icons/sets/communication-icons.svg', 24)
      .iconSet("call", 'styles/img/icons/sets/communication-icons.svg', 24)
      .iconSet("avatars", 'styles/img/icons/avatar-icons.svg', 128)
      .defaultIconSet('styles/img/icons/sets/core-icons.svg', 24);
    $mdThemingProvider
      .theme('docs-dark','default')
      .primaryPalette('yellow')
      .dark();

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
    .state('app.showcase.divider', {
      url: '/divider',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/divider.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/divider-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.fab-speed-dial', {
      url: '/fab-speed-dial',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/fab-speed-dial.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/fab-speed-dial-controller'
            ])
          }
        }
      }
    }).state('app.showcase.fab-toolbar', {
      url: '/fab-toolbar',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/fab-toolbar.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/fab-toolbar-controller'
            ])
          }
        }
      }
    }).state('app.showcase.grid-list', {
      url: '/grid-list',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/grid-list.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/grid-list-controller'
            ])
          }
        }
      }
    }).state('app.showcase.icon', {
      url: '/icon',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/icon.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/icon-controller'
            ])
          }
        }
      }
    }).state('app.showcase.input', {
      url: '/input',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/input.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/input-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.list', {
      url: '/list',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/list-control.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/list-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.menu', {
      url: '/menu',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/menu.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/menu-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.menubar', {
      url: '/menu-bar',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/menu-bar.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/menu-bar-controller'
            ])
          }
        }
      }
    }).state('app.showcase.progress-circular', {
      url: '/progress-circular',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/progress-circular.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/progress-circular-controller'
            ])
          }
        }
      }
    }).state('app.showcase.progress-linear', {
      url: '/progress-linear',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/progress-linear.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/progress-linear-controller'
            ])
          }
        }
      }
    }).state('app.showcase.radio-button', {
      url: '/radio-button',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/radio-button.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/radio-button-controller'
            ])
          }
        }
      }
    }).state('app.showcase.select', {
      url: '/select',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/select.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/select-controller'
            ])
          }
        }
      }
    }).state('app.showcase.side-nav', {
      url: '/side-nav',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/side-nav.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/side-nav-controller'
            ])
          }
        }
      }
    }).state('app.showcase.slider', {
      url: '/slider',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/slider.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/slider-controller'
            ])
          }
        }
      }
    }).state('app.showcase.sub-header', {
      url: '/sub-header',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/sub-header.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/sub-header-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.switch', {
      url: '/switch',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/switch.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/switch-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.tabs', {
      url: '/tabs',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/tabs.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
            ])
          }
        }
      }
    }).state('app.showcase.toast', {
      url: '/toast',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/toast.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/toast-controller'
            ])
          }
        }
      }
    }).state('app.showcase.toolbar-icon', {
      url: '/toolbar-icon',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/toolbar-icon.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/toolbar-icon-controller'
            ])
          }
        }
      }
    }).state('app.showcase.tooltip', {
      url: '/tooltip',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/tooltip.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/tooltip-controller'
            ])
          }
        }
      }
    })
    .state('app.showcase.virtual-repeat', {
      url: '/virtual-repeat',
      views: {
        'content@app': {
          templateUrl: 'app/showcase/views/virtual-repeat.tpl.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'showcase/controllers/virtual-repeat-controller'
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
      'styles/img/icons/twitter.svg',
      'styles/img/icons/ic_comment_24px.svg',
      'styles/img/icons/ic_photo_24px.svg',
      'styles/img/icons/ic_label_24px.svg',
      'styles/img/icons/avatar-icons.svg',
      'styles/img/icons/sets/social-icons.svg',
      'styles/img/icons/sets/device-icons.svg',
      'styles/img/icons/sets/communication-icons.svg'
    ];
    ng.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  });

  return module;
});