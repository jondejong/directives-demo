(function () {
  'use strict';

  describe('directive:dogObject', function () {

    var $compile, $rootScope, element, scope, dogs,
        div;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      scope.data = {};

      dogs = [
        {name: "Bear", age: "3", breed: "Collie"},
        {name: "Snoop", age: "4", breed: "Puggle"}
      ]
    }));

    var parseDirective = function () {
      element = $compile("<dog-object data='data'></dog-object>")(scope);
      scope.$digest();
      div = angular.element(element.find('div'));
    };

    var isHidden = function (el) {
      return el.hasClass('ng-hide');
    };

    it('Starts out empty', function () {
      parseDirective();
      expect(isHidden(div)).toBeTruthy();
    });

    it('List the dogs when the populate', function () {
      parseDirective();
      scope.data.dogs = dogs;
      scope.$digest();
      expect(isHidden(div)).toBeFalsy();
      var tiles = div.find('md-grid-tile');
      expect(tiles.length).toBe(2);
    });

  });
})();
