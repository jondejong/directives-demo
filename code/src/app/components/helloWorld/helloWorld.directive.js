(function () {
  'use strict';

  angular
    .module('playground')
    .directive('jonny', jonny);

  var jonny = function () {
    return {
      restrict: 'E',
      replace: true,
      template: 'Hello World'
    };
  };
});
