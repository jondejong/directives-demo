(function () {
  'use strict';

  describe('directive:dogList', function () {

    var $compile, $rootScope, $q, element,
        DogService, mockPromise, dogs,
        firstDiv, secondDiv;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _DogService_, _$q_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      DogService = _DogService_;
      $q = _$q_;

      mockPromise = {
        then: function () {
        }
      };
      DogService.getDogs = function () {
        return mockPromise;
      };

      dogs = [
        {name: "Bear", age: "3", breed: "Collie"},
        {name: "Snoop", age: "4", breed: "Puggle"}
      ];
    }));

    var parseDirective = function () {
      var scope = $rootScope.$new();
      element = $compile("<dog-list></dog-list>")(scope);
      scope.$digest();
      var divs = element.find('div');
      firstDiv = angular.element(divs[0]);
      secondDiv = angular.element(divs[1]);
    };

    var isHidden = function (el) {
      return el.hasClass('ng-hide');
    };

    it('Sets up a loading screen', function () {
      parseDirective();

      expect(isHidden(firstDiv)).toBeFalsy();
      expect(isHidden(secondDiv)).toBeTruthy();
    });

    it('Asks the service for dogs', function () {
      spyOn(DogService, 'getDogs').and.returnValue(mockPromise);
      parseDirective();
      expect(DogService.getDogs).toHaveBeenCalled();
    });

    it('Shows the dogs', function () {
      var defer = $q.defer();
      DogService.getDogs = function () {
        return defer.promise;
      };

      parseDirective();

      defer.resolve(dogs);
      $rootScope.$apply();

      expect(isHidden(firstDiv)).toBeTruthy();
      expect(isHidden(secondDiv)).toBeFalsy();

      // We should have added two tiles
      var tiles = secondDiv.find('md-grid-tile');
      expect(tiles.length).toBe(2);
    });

  });
})();
