(function () {
  'use strict';

  angular
      .module('playground')
      .controller('HelloScopeController', HelloScopeController);

  /** @ngInject */
  function HelloScopeController() {
    var self = this;

    self.person = {
      firstName: "Arya",
      lastName: "Stark"
    };

    return self;
  }
})();