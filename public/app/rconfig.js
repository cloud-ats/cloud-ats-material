var require = {
  waitSeconds: 0,
  paths: {
    'jquery': '../plugin/jquery/dist/jquery.min',
    'angular': '../plugin/angular/angular.min',
    'angular-animate': '../plugin/angular-animate/angular-animate.min',
    'angular-cookies': '../plugin/angular-cookies/angular-cookies.min',
    'angular-loading-bar': '../plugin/angular-loading-bar/build/loading-bar.min',
    'angular-material': '../plugin/angular-material/angular-material.min',
    'angular-resource': '../plugin/angular-resource/angular-resource.min',
    'angular-sanitize': '../plugin/angular-sanitize/angular-sanitize.min',
    'angular-ui-router': '../plugin/angular-ui-router/release/angular-ui-router.min',
    'angular-couch-potato': '../plugin/angular-couch-potato/dist/angular-couch-potato',
    'domReady': '../plugin/requirejs-domready/domReady',

    'modules-includes': 'includes'
  },
  shim: {
    'angular': {'exports': 'angular', deps: ['jquery']},
    'angular-animate': { deps: ['angular'] },
    'angular-resource': { deps: ['angular'] },
    'angular-cookies': { deps: ['angular'] },
    'angular-sanitize': { deps: ['angular'] },
    'angular-ui-router': { deps: ['angular'] },
    'angular-loading-bar': {deps: ['angular']},
    'angular-couch-potato': { deps: ['angular'] },
  },
  priority: [
    'jquery',
    'angular'
  ] 
}