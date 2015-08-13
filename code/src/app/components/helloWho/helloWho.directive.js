(function () {
  'use strict';

  angular
      .module('playground')
      .directive('helloWho', function () {
        return {
          scope: {},
          restrict: 'E',
          templateUrl: 'app/components/helloWho/helloWho.template.html',
          link: function (scope) {
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
            };
          }
        };
      });
})();
