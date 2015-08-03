describe('ToDoAppController', function() {
  beforeEach(module('ToDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoAppController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.fullList).toEqual([ ]);
    expect(ctrl.listItem).toBeUndefined();
  });

  describe('when submitting an item using the text form', function() {

    it('adds the task to the full list of things to do', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      expect(ctrl.fullList[0].text).toContain('finish to do challenge');
    });

    it('sets the tasks completion status as false', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      expect(ctrl.fullList[0].taskComplete).toEqual(false);
    });

    it('increments the counter showing number of tasks to be done', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      expect(ctrl.toComplete).toEqual(1);
    });

  });

  describe('when clearing completed items', function() {

    it('clears items that are marked as completed', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      ctrl.fullList[0].taskComplete = true;
      ctrl.clearCompleted();
      expect(ctrl.fullList.length).toEqual(0);
    });

    it('does not clear items that are not marked as completed', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      ctrl.listItem = 'another task';
      ctrl.addItem();
      ctrl.fullList[0].taskComplete = true;
      ctrl.clearCompleted();
      expect(ctrl.fullList.length).toEqual(1);
    });

    it('increments the counter showing number of tasks completed', function() {
      ctrl.listItem = 'finish to do challenge';
      ctrl.addItem();
      ctrl.fullList[0].taskComplete = true;
      ctrl.clearCompleted();
      expect(ctrl.completed).toEqual(1);
    });

  });

});