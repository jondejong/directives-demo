(function () {
  'use strict';

  angular
    .module('playground')
    .directive('deferred', deferred);

  function deferred () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/clickable/clickable.template.html',
      controller: DeferredController,
      controllerAs: 'ctrl',
      transclude: true
    };

    /** @ngInject */
    function DeferredController($q) {
      console.log('q', $q);
      var self = this;
      self.count = 0;

      var buttonClick = function () {
        console.log("BOOM")
        self.count++;
      }
    }

  };
})();
