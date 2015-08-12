(function () {
  'use strict';

  angular
      .module('playground')
      .directive('list', function () {
        return {
          scope: {
            things: "="
          },
          restrict: 'E',
          templateUrl: 'app/components/transclude/list.template.html',
          link: function (scope, el, attrs) {
            console.log("creating list of things, ", scope.things);
          }
        };
      });

})();
