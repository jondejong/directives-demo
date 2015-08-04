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
        });

    $urlRouterProvider.otherwise('/list');
  }

})();
