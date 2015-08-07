(function () {
    'use strict';

    angular
        .module('playground')
        .directive('helloWho', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/helloWho/helloWho.template.html',
                link: function (scope) {
                    console.log('setting the things')
                    scope.speaking = false;
                    scope.person = {
                        firstName: '',
                        lastName: ''
                    };

                    scope.sayHi = function () {
                        scope.speaking = true;
                    };

                    scope.shutUp = function () {
                        scope.person.firstName = '';
                        scope.person.lastName = '';
                        scope.speaking = false;
                    }
                }
            };
        });
})();
