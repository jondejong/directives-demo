(function() {
  'use strict';

  angular
    .module('playground')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
