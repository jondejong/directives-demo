(function () {
  'use strict';

  describe('directive:fadeOut', function () {

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
      }
      DogService.getDogs = function () {
        return mockPromise;
      };

      dogs = [
        {name: "Bear", age: "3", breed: "Collie"},
        {name: "Snoop", age: "4", breed: "Puggle"}
      ]
    }));


  });
})();
