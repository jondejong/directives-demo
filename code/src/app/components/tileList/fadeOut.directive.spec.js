(function () {
  'use strict';

  describe('directive:fadeOut', function () {

    var $compile, $rootScope, $timeout, element, scope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $timeout = _$timeout_;

      scope = $rootScope.$new();

      var html = "<div class='fade-me'>" +
          "<div fade-out='trigger' callback='postFade'>Delete Div</div>" +
          "</div>"

      scope.trigger = false;
      scope.postFade = function () {};

      element = $compile(html)(scope);
      scope.$digest();
    }));

    it('should start unfaded', function () {
      expect(element.hasClass('fade')).toBeFalsy();
    });

    it('should add the fade class to the fade-me element when triggered', function () {
      scope.trigger = true;
      scope.$digest();
      expect(element.hasClass('fade')).toBeTruthy();
    });

  });
})();
