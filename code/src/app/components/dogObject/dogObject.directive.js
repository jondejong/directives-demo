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
        link: function (scope, el, attrs, dlc) {
          // Controller is injected in here for
          // use in the link function.
          // ie, can access dlc.dogs
        }
      };
    });
})();
