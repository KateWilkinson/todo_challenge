toDoApp.controller('ToDoAppController', [function() {

  var self = this;
  self.fullList = [];
  self.toComplete = 0
  self.completed = 0


  self.addItem = function() {
    self.fullList.push({text: self.listItem, taskComplete: false})
    self.listItem = ''
    self.toCompleteCounter();
  };

  self.toCompleteCounter = function() {
    self.toComplete = self.fullList.length
  };

  self.clearCompleted = function() {
    function isCompleted(task) {
      if (task.taskComplete === false) {
        return task
      } else {
        self.completed ++
      }
    };
    self.fullList = self.fullList.filter(isCompleted)
    self.toCompleteCounter();
  };

}]);