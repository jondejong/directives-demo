(function () {
  'use strict';

  describe('directive:list', function () {

    var $compile, $rootScope, element;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      var html = '<list things="bots" type-name="Bot"></list>';
      var scope = $rootScope.$new();
      scope.bots = [
        {name: 'bot 1', description: 'awesome'},
        {name: 'bot 2', description: 'ok'}
      ];
      element = $compile(html)(scope);
      scope.$digest();
    }));

    it('Should add the outer div', function () {
      var div = angular.element(element.find('div'));
      expect(div.hasClass('list-data')).toBeTruthy();
    });

    it('Should create a thing for each bot', function () {
      var div = angular.element(element.find('div'));
      var things = div.find('thing');
      expect(things.length).toBe(2);
    });

  });
})();
