(function () {
  'use strict';

  describe('directive:draggable', function () {

    var $compile, $rootScope, element, $document;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$document_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $document = _$document_;

      var html = '<draggable>Drag Me</draggable>';
      var scope = $rootScope.$new();
      element = $compile(html)(scope);
      scope.$digest();

    }));

    fit('should add the class to the element', function () {
      expect(element.hasClass('jdj-draggable'));
    })

  });
})();
