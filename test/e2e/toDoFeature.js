describe('To do app', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('displays tasks added using form', function() {
    var list = element.all(by.repeater('task in toDoCtrl.fullList'));
    browser.get('http://localhost:3000');
    element(by.model('toDoCtrl.listItem')).sendKeys('something to do');
    element(by.id('add')).click()
    list.then(function(newlist) {
      expect(newlist.length).toBeGreaterThan(0);
    });
  });

  it('marks tasks checked off as having a completed status', function() {
    browser.get('http://localhost:3000');
    element(by.model('toDoCtrl.listItem')).sendKeys('something to do');
    element(by.id('add')).click();
    element(by.id('done')).click();
    expect(element(by.className('completed-true')).isPresent()).toBeTruthy();
  });
});