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

            mockPromise = {then: function() {}}
            DogService.getDogs = function () {
                return mockPromise;
            };

            dogs = [
              {name: "Bear", age: "3", breed: "Collie"},
              {name: "Snoop", age: "4", breed: "Puggle"}
            ]
        }));

        var parseDirective = function() {
          var scope = $rootScope.$new();
          element = $compile("<dog-list></dog-list>")(scope);
          scope.$digest();
          var divs = element.find('div');
          firstDiv = angular.element(divs[0]);
          secondDiv = angular.element(divs[1]);
        };

        it('Sets up a loading screen', function () {
            parseDirective();

            expect(firstDiv.hasClass('ng-hide')).toBeFalsy();
            expect(secondDiv.hasClass('ng-hide')).toBeTruthy();
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

          expect(firstDiv.hasClass('ng-hide')).toBeTruthy();
          expect(secondDiv.hasClass('ng-hide')).toBeFalsy();
        });

    });
})();
