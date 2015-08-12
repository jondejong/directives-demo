(function () {
  'use strict';

  angular
      .module('playground')
      .directive('listContainer', function () {
        return {
          restrict: 'E',
          transclude: true,
          templateUrl: 'app/components/transclude/listcontainer.template.html'
        };
      });

})();
