(function () {
  'use strict';

  angular
      .module('playground')
      .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController() {
    var self = this;
    self.title = 'Change Me';
    return self;
  }
})();
