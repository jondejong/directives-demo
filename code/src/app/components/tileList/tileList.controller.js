(function () {
  'use strict';

  angular
      .module('playground')
      .controller('TileListController', TileListController);

  /** @ngInject */
  function TileListController() {
    var self = this;

    self.loading = false;
    self.tiles = [];

    var captions = [
      'Delete me!', "Please don't delete me :-(", "I'm too young to be deleted!"
    ];

    var titles = [
      'So Deletable', 'Welcome Worn Out', 'Ready to Go'
    ];

    var index = function () {
      return Math.floor(Math.random() * 3);
    };

    self.tiles = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9], function (id) {
      return {
        id: id,
        title: titles[index()],
        caption: captions[index()],
        deleted: false
      };
    });

    //console.log('tiles', self.tiles)

    self.deleteTile = function (tile) {
      console.log("delete me", tile);
      tile.deleted = true;
    };

    return self;
  }
})();
