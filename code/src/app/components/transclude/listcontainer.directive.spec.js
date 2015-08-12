(function () {
  'use strict';

  describe('directive:listcontainer', function () {

    var $compile, $rootScope, element, outerdiv;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      var html =
          '<list-container>' +
          '<div>This Should Stay</div>' +
          '</list-container>';
      var scope = $rootScope.$new();
      element = $compile(html)(scope);
      scope.$digest();

      outerdiv = angular.element(element.find('div'));
    }));


    it('Should add the class to the outer div', function () {
      expect(outerdiv.hasClass('list-container')).toBeTruthy();
    });

    it('Should add the header', function () {
      // Should add the header
      var headerdiv = angular.element(outerdiv.find('div'));
      expect(headerdiv.html()).toContain('<strong>Here is a list of some things</strong>');
    });

    it('Should keep the transcluded content', function () {
      var transclude = angular.element(element.find('ng-transclude'));
      expect(transclude.html()).toContain('This Should Stay');

    });

  });
})();
