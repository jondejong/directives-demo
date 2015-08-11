(function () {
  'use strict';

  angular
      .module('playground')
      .controller('TileListController', TileListController);

  /** @ngInject */
  function TileListController(_) {
    var self = this;

    self.loading = false;
    self.tiles = [];

    var captions = [
        'Delete me!', "Please don't delete me :-(", "I'm too young to be deleted!"
    ];

    var titles = [
        'So Deletable', 'Welcome Worn Out', 'Ready to Go'
    ];

    self.tiles = _.map([1,2,3,4,5,6,7,8,9], function(id){
      return {
        id: id,
        title: titles[Math.random() * 3],
        caption: captions[Math.random() * 3],
      }
    });

    self.deleteTile = function(tile) {
      console.log("delete me", tile);
    };

    return self;
  }
})();
