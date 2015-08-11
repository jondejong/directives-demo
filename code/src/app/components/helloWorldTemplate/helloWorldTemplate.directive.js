(function () {
  'use strict';

  angular
      .module('playground')
      .directive('helloWorldTemplate', function () {
        return {
          restrict: 'E',
          templateUrl: 'app/components/helloWorldTemplate/helloWorld.template.html'
        };
      });
})();
