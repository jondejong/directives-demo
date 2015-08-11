(function () {
  'use strict';

  describe('directive:helloPerson', function () {

    var $compile, $rootScope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));


    it('Replaces the HTML content correctly', function () {
      var html = '<hello-person-scope name="Lori"></hello-person-scope>';
      var element = $compile(html)($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Hello Lori. You came from scope.");
    });

  });
})();
