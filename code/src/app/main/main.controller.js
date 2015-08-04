(function() {
  'use strict';

  angular
    .module('playground')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
      console.log("in the main controller");
  }
})();
