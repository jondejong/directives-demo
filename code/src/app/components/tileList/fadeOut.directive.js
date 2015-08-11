(function () {
    'use strict';

    angular
        .module('playground')
        .directive('fadeOut', function () {
            return {
                restrict: 'A',
                scope: {
                    fadeOut: '='
                },
                link: function (scope, el, attrs) {
                }
            };
        });


})();
