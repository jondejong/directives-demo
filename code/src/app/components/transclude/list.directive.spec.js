(function () {
  'use strict';

  describe('directive:list', function () {

    var $compile, $rootScope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));


    it('Replaces the HTML content correctly', function () {
      var html = '<list things="bots" type-name="Bot"></list>';
      var scope = $rootScope.$new();
      scope.bots = [
        {name: 'bot 1', description: 'awesome'},
        {name: 'bot 2', description: 'ok'}
      ];
      var element = $compile(html)(scope);
      scope.$digest();

      // It should add the outer div
      var div = angular.element(element.find('div'));
      expect(div.hasClass('list-data')).toBeTruthy();

      // It should create a thing for each "bot"
      var things = div.find('thing');
      expect(things.length).toBe(2);

    });

  });
})();
