(function () {
    'use strict';

    angular
        .module('playground')
        .directive('dogList', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/dog/dogList.template.html',
                controller: DogListController,
                controllerAs: 'dlc',
                link: function (scope, el, attrs, dlc) {
                    scope.loading = true;
                    scope.$watch('dlc.dogs', function () {
                        if(dlc.dogs.length > 0) {
                            scope.dogList = dogs;
                        }
                    });
                }
            };
        });


    /** @ngInject */
    function DogListController(DogService) {
        var dlc = this;
        dlc.dogs = [];

        DogService.getDogs().then(function(dogs) {
            dlc.dogs = dogs;
        });
    }
})();
