(function () {
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
        .state('home.hellops', {
          url: 'hellops',
          templateUrl: 'app/components/helloPersonScope/helloPersonScope.container.html'
        })
        .state('home.hellos', {
          url: 'hellos',
          templateUrl: 'app/components/helloScope/helloScope.container.html',
          controller: 'HelloScopeController',
          controllerAs: 'ctrl'
        })
        .state('home.hellowho', {
          url: 'hellowho',
          templateUrl: 'app/components/helloWho/helloWho.container.html'
        })
        .state('home.hellowa', {
          url: 'helloa',
          templateUrl: 'app/components/helloAttr/helloAttr.container.html'
        })
        .state('home.dogs', {
          url: 'dogs',
          templateUrl: 'app/components/dog/dogList.container.html'
        })
        .state('home.dogso', {
          url: 'dogso',
          templateUrl: 'app/components/dogObject/dogObject.container.html',
          controller: 'DogObjectController',
          controllerAs: 'ctrl'
        })
        .state('home.tiles', {
          url: 'tiles',
          templateUrl: 'app/components/tileList/tileList.html',
          controller: 'TileListController',
          controllerAs: 'tlc'
        })
        .state('home.drag', {
          url: 'drag',
          templateUrl: 'app/components/draggable/draggable.container.html',
          controller: 'DraggableController',
          controllerAs: 'ctrl'
        })
        .state('home.things', {
          url: 'things',
          templateUrl: 'app/components/transclude/things.html',
          controller: 'ThingController',
          controllerAs: 'ctrl'
        });


    $urlRouterProvider.otherwise('/list');
  }

})();
