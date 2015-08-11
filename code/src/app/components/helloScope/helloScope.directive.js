(function () {
  'use strict';

  angular
      .module('playground')
      .directive('helloScope', function () {
        return {
          scope: {
            person: "="
          },
          restrict: 'E',
          templateUrl: 'app/components/helloScope/helloScope.template.html',
          link: function (scope) {
            console.log("we have a person", scope.person);
          }
        };
      });
})();
