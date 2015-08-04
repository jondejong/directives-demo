(function() {
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
                url: "/"
            }
        ];

    }
})();
