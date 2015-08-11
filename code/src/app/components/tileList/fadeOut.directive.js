(function () {
  'use strict';

  angular
      .module('playground')
      .directive('fadeOut', function ($timeout) {
        return {
          restrict: 'A',
          scope: {
            fadeOut: '=',
            callback: '&'
          },
          link: function (scope, element, attrs) {

            scope.$watch('fadeOut', function (value) {
              if (value) {
                element.parent().parent().parent().addClass('fade');
                $timeout(scope.callback, 1000);
              }
            });

          }
        };
      });


})();
