(function () {
  'use strict';

  describe('directive:thing', function () {

    var $compile, $rootScope, element;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      var html = '<thing>{{thing.name}}: {{thing.description}}</thing>';
      var scope = $rootScope.$new();
      scope.thing = {name: 'bot 1', description: 'awesome'};
      scope.typeName = 'Bot';
      element = $compile(html)(scope);
      scope.$digest();

    }));


    it('Should put the type in a strong', function () {
      var strong = angular.element(element.find('strong'));
      expect(strong.html()).toContain('Bot:');

    });

    it('Should transclude in the thing', function () {
      var transclude = angular.element(element.find('ng-transclude'));
      expect(transclude.html()).toContain('bot 1: awesome');
    });

  });
})();
