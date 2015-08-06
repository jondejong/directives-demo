(function () {
  'use strict';

  angular
    .module('playground')
    .directive('helloWorld', function () {
      return {
        restrict: 'E',
        replace: true,
        template: '<p>Hello MidwestJS</p>'
      };
    });
})();
