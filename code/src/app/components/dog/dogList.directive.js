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
            // Controller is injected in here for
            // use in the link function.
            // ie, can access dlc.dogs
          }
        };
      });


  /** @ngInject */
  function DogListController(DogService) {
    var dlc = this;
    dlc.dogs = [];

    DogService.getDogs().then(function (dogs) {
      dlc.dogs = dogs;
    });
  }
})();
