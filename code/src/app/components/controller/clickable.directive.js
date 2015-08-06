(function () {
  'use strict';

  angular
    .module('playground')
    .directive('helloWorldTemplate', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/helloWorldTemplate/helloWorld.directive.template.html'
      };
    });
})();
