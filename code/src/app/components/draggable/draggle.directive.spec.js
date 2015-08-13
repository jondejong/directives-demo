(function () {
  'use strict';

  describe('directive:draggable', function () {

    var $compile, $rootScope, element, $document, scope, event;

    beforeEach(module('playground'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$document_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $document = _$document_;

      event = {
        type: 'mousedown',
        preventDefault: function() {},
        pageX: 10,
        pageY: 20
      };

      var html = '<draggable>Drag Me</draggable>';
      scope = $rootScope.$new();
      element = $compile(html)(scope);
      scope.$digest();
    }));

    it('should add the class to the element', function () {
      expect(element.hasClass('jdj-draggable'));
    });

    it('should handle mousedown', function(){
      spyOn($document, "on");
      spyOn(event, 'preventDefault');

      element.trigger(event);
      expect(event.preventDefault).toHaveBeenCalled();

      expect($document.on.calls.argsFor(0)).toEqual(['mousemove', jasmine.any(Function)]);
      expect($document.on.calls.argsFor(1)).toEqual(['mouseup', jasmine.any(Function)]);
    });

    it('should handle a mouse move', function () {
      element.trigger(event);

      var moveEvent = {
        type: 'mousemove',
        pageX: 20,
        pageY: 40
      };

      $document.trigger(moveEvent);
      expect(element.attr('style').indexOf('top: 20px') > -1).toBeTruthy();
      expect(element.attr('style').indexOf('left: 10px') > -1).toBeTruthy();
    });

    it('should support moouseup', function() {
      element.trigger(event);
      spyOn($document, 'off');

      $document.trigger('mouseup');

      expect($document.off.calls.argsFor(0)).toEqual(['mousemove', jasmine.any(Function)]);
      expect($document.off.calls.argsFor(1)).toEqual(['mouseup', jasmine.any(Function)]);
    });
  });
})();
