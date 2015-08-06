(function () {
  'use strict';

  angular
    .module('playground')
    .directive('clickable', clickable);

  function clickable () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/clickable/clickable.template.html',
      controller: ClickableController,
      controllerAs: 'ctrl',
      transclude: true
    };

    /** @ngInject */
    function ClickableController() {
      var self = this;
      self.count = 0;

      var buttonClick = function () {
        console.log("BOOM")
        self.count++;
      }
    }

  };
})();
