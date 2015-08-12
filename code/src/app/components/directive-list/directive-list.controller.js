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
        name: "Hello Person",
        description: "Grab data from an attribute",
        url: "#/hellop"
      },
      {
        name: "Hello Person Scope",
        description: "Grab string data from scope",
        url: "#/hellops"
      },
      {
        name: "Hello Scope",
        description: "Scope some object from a controller",
        url: "#/hellos"
      },
      {
        name: "Hello Who?",
        description: "Simple interaction with the directive",
        url: "#/hellowho"
      },
      {
        name: "Hello Attribute",
        description: "A directive that can be and element or an attribute",
        url: "#/helloa"
      },
      {
        name: "Dog List",
        description: "Deferred data load through a service and controller",
        url: "#/dogs"
      },
      {
        name: "Dog List -- Object",
        description: "Deferred data load through a service and controller. This time with a 2-way bound object",
        url: "#/dogso"
      },
      {
        name: "Delete Some Tiles",
        description: "Playing with the element with an attribute directive, and calling back to the controller",
        url: "#/tiles"
      },
      {
        name: "Drag Something",
        description: "Handle events with an element",
        url: "#/drag"
      },
      {
        name: "List Of Tings",
        description: "Example of transclusion",
        url: "#/things"
      }
    ];

  }
})();
