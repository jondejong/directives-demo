(function () {
  'use strict';

  describe('directive:helloAttr', function () {

    var $compile, $rootScope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));


    it('Replaces the HTML content correctly', function () {
      var html = '<div hello-attr name="Jonny"></div>';
      var element = $compile(html)($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Hello Jonny!!!");
    });

  });
})();
