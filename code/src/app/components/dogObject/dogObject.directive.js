(function () {
  'use strict';

  angular
    .module('playground')
    .directive('dogObject', function () {
      return {
        scope: {
          data: '='
        },
        restrict: 'E',
        templateUrl: 'app/components/dogObject/dogObject.template.html',
        link: function (scope, el, attrs) {
          console.log("dog object with scope", scope)
          console.log("dog object with data", scope.data)
        }
      };
    });
})();
