app.controller("TodosController",function($scope, TodoService){

  TodoService.getTodos().then(function(todos){
    $scope.todos = todos.data;
  });
});

app.controller("NewTodoController",function($scope,TodoService,$location){
  $scope.addTodo = function(todo){
    TodoService.addTodo(todo).then(function(){
      // debugger;
      $location.path('/todos');
    });
  };


});