(function () {
  'use strict';

  describe('directive:helloWorldTemplate', function () {

    var $compile, $rootScope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));


    it('Replaces the HTML content correctly', function () {
      var html = '<hello-world-template></hello-world-template>';
      var element = $compile(html)($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Hello MidwestJS, I'm in a template.");
    });

  });
})();
