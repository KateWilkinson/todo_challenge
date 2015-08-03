describe('To do app', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  // it('displays tasks added using form', function() {
  //   browser.get('http://localhost:3000');
  //   element(by.model('toDoCtrl.listItem')).sendKeys('something to do');
  //   element(by.className('btn')).click();
  //   expect(element(by.id('text')).getText()).toEqual('something to do');
  // });

  // it('marks tasks checked off as having a completed status', function() {
  //   browser.get('http://localhost:3000');
  //   element(by.model('toDoCtrl.listItem')).sendKeys('something to do');
  //   element(by.id('add')).click();
  //   element(by.model('id.done')).click();
  //   expect(element(by.className('completed-{{task.taskComplete}}'))).toEqual(true);
  // });
});