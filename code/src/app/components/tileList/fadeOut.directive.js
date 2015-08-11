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
          link: function (scope, element, attrs) {

            scope.$watch('fadeOut', function (value) {
              if (value) {
                element.parent().parent().parent().addClass('fade');


              }
            });

          }
        };
      });


})();
