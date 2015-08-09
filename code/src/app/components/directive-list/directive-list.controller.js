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
                description: "Modify some data with scope",
                url: "#/hellop"
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
