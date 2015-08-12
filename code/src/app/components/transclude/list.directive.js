(function () {
  'use strict';

  angular
      .module('playground')
      .directive('list', function () {
        return {
          scope: {
            things: "=",
            typeName: '@'
          },
          restrict: 'E',
          templateUrl: 'app/components/transclude/list.template.html'
        };
      });

})();
