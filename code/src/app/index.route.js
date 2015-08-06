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
          templateUrl: 'app/components/helloWorld/helloWorldContainer.html'
        })
      .state('home.hellowt', {
        url: 'hellowt',
        templateUrl: 'app/components/helloWorldTemplate/helloWorldContainer.html'
      })
      .state('home.clickable', {
        url: 'clickable',
        templateUrl: 'app/components/clickable/clickable.container.html'
      });

    $urlRouterProvider.otherwise('/list');
  }

})();
