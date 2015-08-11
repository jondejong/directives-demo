(function () {
  'use strict';

  angular
      .module('playground')
      .directive('helloWorld', function () {
        return {
          restrict: 'E',
          template: '<p>Hello MidwestJS</p>'
        };
      });
})();
