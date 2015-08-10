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
        }
      };
    });
})();
