(function () {
  'use strict';

  angular
      .module('playground')
      .directive('list', function () {
        return {
          scope: {
            list: "="
          },
          restrict: 'E',
          link: function (scope, el, attrs) {
          }
        };
      });

})();
