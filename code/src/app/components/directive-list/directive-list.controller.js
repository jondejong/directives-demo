(function () {
  'use strict';

  angular
    .module('playground')
    .controller('DirectiveListController', DirectiveListController);

  /** @ngInject */
  function DirectiveListController() {
    var self = this;

    self.directives = [
      {
        name: "Hello World",
        description: "The simplest directive. Put stuff on the page.",
        url: "#/hellow"
      },
      {
        name: "Hello World Template",
        description: "Put stuff on the page, but from a template",
        url: "#/hellowt"
      },
      {
        name: "Clickable",
        description: "Use a controller to interact with the directive",
        url: "#/clickable"
      },
      {
        name: "Other 3",
        description: "some Other thing",
        url: "#"
      },
      {
        name: "Other 4",
        description: "some Other thing",
        url: "#"
      },
      {
        name: "Other 5",
        description: "some Other thing",
        url: "#"
      },
      {
        name: "Other 6",
        description: "some Other thing",
        url: "#"
      },
      {
        name: "Other 7",
        description: "some Other thing",
        url: "#"
      }
    ];

  }
})();
