(function () {
  'use strict';

  angular
      .module('playground')
      .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
