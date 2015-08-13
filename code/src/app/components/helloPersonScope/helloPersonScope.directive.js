(function () {
  'use strict';

  angular
      .module('playground')
      .directive('helloPersonScope', function () {
        return {
          scope: {
            name: '@'
          },
          restrict: 'E',
          templateUrl: 'app/components/helloPersonScope/helloPersonScope.template.html'
        };
      });
})();
