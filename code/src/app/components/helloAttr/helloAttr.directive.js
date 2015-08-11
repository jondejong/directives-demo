(function () {
  'use strict';

  angular
      .module('playground')
      .directive('helloAttr', function () {
        return {
          scope: true,
          restrict: 'AE',
          templateUrl: 'app/components/helloAttr/helloAttr.template.html',
          link: function (scope, el, attrs) {
            scope.name = attrs.name;
          }
        };
      });
})();
