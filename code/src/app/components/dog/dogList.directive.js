(function () {
    'use strict';

    angular
        .module('playground')
        .directive('dogList', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/helloPerson/dogList.template.html',
                link: function (scope, el, attrs) {
                    scope.name = attrs.name;
                }
            };
        });
})();
