(function () {
  'use strict';

  angular
    .module('playground')
    .directive('helloPerson', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/helloPerson/helloPerson.template.html',
        link: function (scope, el, attrs) {
          scope.name = attrs.name;
        }
      };
    });
})();
