(function() {
  'use strict';

  angular
    .module('playground')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.list', {
          url: 'list',
          templateUrl: 'app/components/directive-list/directive-list.html',
          controller: 'DirectiveListController',
          controllerAs: 'ctrl'
        })
      .state('home.hellow', {
          url: 'hellow',
          templateUrl: 'app/components/helloWorld/helloWorld.container.html'
        })
      .state('home.hellowt', {
        url: 'hellowt',
        templateUrl: 'app/components/helloWorldTemplate/helloWorld.container.html'
      })
      .state('home.hellop', {
        url: 'hellop',
        templateUrl: 'app/components/helloPerson/helloPerson.container.html'
      })
      .state('home.deferred', {
          url: 'deferred',
        templateUrl: 'app/components/deferred/deferred.container.html'
      });

    $urlRouterProvider.otherwise('/list');
  }

})();
