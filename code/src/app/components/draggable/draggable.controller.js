(function () {
  'use strict';

  angular
      .module('playground')
      .controller('DraggableController', DraggableController);

  /** @ngInject */
  function DraggableController() {
    var self = this;
    self.name = 'Something Draggable';
    return self;
  }
})();