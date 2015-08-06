(function () {
  'use strict';

  angular
    .module('playground')
    .controller('DirectiveListController', DirectiveListController);

  /** @ngInject */
  function DirectiveListController() {
    var self = this;

    console.log("in the DirectiveListController controller");

    self.directives = [
      {
        name: "Hello World",
        description: "The simplest directive. Put stuff on the page.",
        url: "#/hellow"
      },
      {
        name: "Other 1",
        description: "The simplest directive. Put stuff on the page.",
        url: "/"
      },
      {
        name: "Other 2",
        description: "The simplest directive. Put stuff on the page.",
        url: "/"
      },
      {
        name: "Other 3",
        description: "The simplest directive. Put stuff on the page.",
        url: "/"
      },
      {
        name: "Other 4",
        description: "The simplest directive. Put stuff on the page.",
        url: "/"
      }
    ];

  }
})();
