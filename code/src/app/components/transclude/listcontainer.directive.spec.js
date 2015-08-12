(function () {
  'use strict';

  describe('directive:helloWorld', function () {

    var $compile, $rootScope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));


    it('Replaces the HTML content correctly', function () {
      var html =
          '<list-container>' +
          '<div>This Should Stay</div>' +
          '</list-container>';
      var scope = $rootScope.$new();
      scope.bots = [
        {name: 'bot 1', description: 'awesome'},
        {name: 'bot 2', description: 'ok'}
      ];
      var element = $compile(html)(scope);
      scope.$digest();

      // Should add the class to the outter div
      var outterdiv = angular.element(element.find('div'));
      expect(outterdiv.hasClass('list-container')).toBeTruthy();

      // Should add the header
      var headerdiv = angular.element(outterdiv.find('div'));
      expect(headerdiv.html()).toContain('<strong>Here is a list of some things</strong>');

      // Should keep the transcluded content
      var transclude = angular.element(element.find('ng-transclude'));
      expect(transclude.html()).toContain('This Should Stay');

    });

  });
})();
