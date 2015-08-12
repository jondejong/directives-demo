(function () {
  'use strict';

  angular
      .module('playground')
      .directive('thing', function () {
        return {
          transclude: true,
          restrict: 'E',
          templateUrl: 'app/components/transclude/thing.template.html'
        };
      });

})();
