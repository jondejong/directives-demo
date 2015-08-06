(function () {
  'use strict';

  angular
    .module('playground')
    .directive('clickable', clickable);

  function clickable () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/clickable/clickable.template.html'
    };
  };
})();
