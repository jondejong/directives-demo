(function() {
  'use strict';

  angular
    .module('playground')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;

    self.directives = [
        {
            name: "Hello World",
            description: "The simplest directie. Put stuff on the page.",
            url: "/"
        }
    ];

  }
})();
