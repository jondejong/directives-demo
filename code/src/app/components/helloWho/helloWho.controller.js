(function () {
    'use strict';

    angular
        .module('playground')
        .controller('HelloWhoController', HelloWhoController);

    /** @ngInject */
    function HelloWhoController() {
        var self = this;

        self.person = {
            firstName: '',
            lastName: ''
        };

        return self;
    }
})();