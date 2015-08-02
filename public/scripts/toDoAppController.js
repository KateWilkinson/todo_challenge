toDoApp.controller('ToDoAppController', [function() {

  var self = this;
  self.fullList = [];

  self.addItem = function() {
    self.fullList.push(self.listItem)
  };

}]);