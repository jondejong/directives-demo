(function () {
  'use strict';

  angular
    .module('playground')
    .directive('deferred', deferred);

  function deferred () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/deferred/deferred.template.html',
      controller: DeferredController,
      controllerAs: 'ctrl',
      transclude: true
    };

    /** @ngInject */
    function DeferredController() {
      var self = this;
      self.count = 0;
    }

  };
})();
