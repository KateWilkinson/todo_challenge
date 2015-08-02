describe('ToDoAppController', function() {
  beforeEach(module('ToDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoAppController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.fullList).toBeUndefined();
    expect(ctrl.listItem).toBeUndefined();
  });

  describe('when submitting an item using the text form', function() {

    it('adds the item to the full list of things to do', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      expect(ctrl.fullList).toContain('finish to do challenge');
    });

  });

});