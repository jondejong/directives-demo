(function () {
  'use strict';

  angular
      .module('playground')
      .controller('ThingController', ThingController);

  /** @ngInject */
  function ThingController() {
    var self = this;
    self.things = [
      {name: 'Awesomebot', description: 'Awesome bot'},
      {name: 'Horribot', description: 'Terrible, no good, very bad bot'},
      {name: 'Toaster', description: 'Makes bread hot'},
      {name: 'Tesla', description: 'Goes fast'}
    ];
    return self;
  }
})();
