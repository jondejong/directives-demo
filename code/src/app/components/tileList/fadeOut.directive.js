(function () {
  'use strict';

  var findFadingParent = function(element) {
    if(element.hasClass('fade-me')) {
      return element;
    } else {
      return findFadingParent(element.parent());
    }
  };

  angular
      .module('playground')
      .directive('fadeOut', function ($timeout) {
        return {
          restrict: 'A',
          scope: {
            fadeOut: '=',
            callback: '&'
          },
          link: function (scope, element) {

            scope.$watch('fadeOut', function (value) {
              if (value) {
                var parent = findFadingParent(element);
                parent.addClass('fade');
                $timeout(scope.callback, 1050);
              }
            });

          }
        };
      });


})();
