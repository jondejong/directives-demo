(function () {
  'use strict';

  describe('directive:helloScope', function () {

    var $compile, scope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      scope = _$rootScope_.$new();
    }));

    it('Replaces the HTML content correctly', function () {
      var html = '<hello-scope person="ctrl.person"></hello-scope>';

      scope.ctrl = {
        person: {
          firstName: 'Jon', lastName: 'Snow'
        }
      };

      var element = $compile(html)(scope);
      scope.$digest();
      expect(element.html()).toContain("Hello Jon Snow!!!");
    });
  });
})();
