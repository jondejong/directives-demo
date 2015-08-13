(function () {
  'use strict';

  describe('directive:helloWho', function () {

    var $compile, scope;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      var html = '<hello-who></hello-who>';
      var element = $compile(html)(_$rootScope_);
      _$rootScope_.$digest();
      scope = element.isolateScope();
    }));

    it('should set speaking to false', function () {
      expect(scope.speaking).toBeFalsy();
    });

    it('should support saying hi', function () {
      scope.speaking = false;
      scope.sayHi();
      expect(scope.speaking).toBeTruthy();
    });

    it('should support shutting up', function () {
      scope.speaking = true;
      scope.shutUp();
      expect(scope.speaking).toBeFalsy();
    });
  });
})();
