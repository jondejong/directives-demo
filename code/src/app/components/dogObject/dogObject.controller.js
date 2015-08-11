(function () {
  'use strict';

  angular
      .module('playground')
      .controller('DogObjectController', DogObjectController);

  /** @ngInject */
  function DogObjectController(DogService) {
    var self = this;

    self.loading = false;
    self.data = {};
    self.fetch = function () {
      self.loading = true;
      DogService.getDogs().then(function (dogs) {
        self.loading = false;
        self.data.dogs = dogs;
      });
    };

    return self;
  }
})();
