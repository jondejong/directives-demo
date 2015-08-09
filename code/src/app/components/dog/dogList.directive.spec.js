(function () {
    'use strict';

      describe('directive:dogList', function () {

        var $compile, $rootScope, $q, element, DogService, mockPromise;

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
        }));

        var parseDirective = function() {
          var scope = $rootScope.$new();
          element = $compile("<dog-list></dog-list>")(scope);
          scope.$digest();
        };

        it('Sets up a loading screen', function () {
            parseDirective();

            var divs = element.find('div');
            var firstDiv = angular.element(divs[0]);
            var secondDiv = angular.element(divs[1]);
            expect(firstDiv.hasClass('ng-hide')).toBeFalsy();
            expect(secondDiv.hasClass('ng-hide')).toBeTruthy();
        });

        it('Asks the service for dogs', function () {
            spyOn(DogService, 'getDogs').and.returnValue(mockPromise);
            parseDirective();
            expect(DogService.getDogs).toHaveBeenCalled();
        });

    });
})();
