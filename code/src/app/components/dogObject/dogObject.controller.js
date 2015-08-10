(function () {
  'use strict';

  angular
    .module('playground')
    .controller('DogObjectController', DogObjectController);

  /** @ngInject */
  function DogObjectController(DogService) {
    var self = this;

    self.data = {};
    self.fetch = function() {
      DogService.getDogs().then(function (dogs) {
        self.data.dogs = dogs;
      });
    };

    return self;
  }
})();
