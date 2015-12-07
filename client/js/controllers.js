app.controller("TodosController",function($scope, TodoService, $location){

  TodoService.getTodos().then(function(todos){
    $scope.todos = todos.data;
  });
  
  $scope.deleteATodo = function(todo){
    TodoService.deleteATodo(todo._id).then(function(todo){
      
      TodoService.getTodos().then(function(todos){
        $scope.todos = todos.data;
       });
      
      $location.path('/todos');
    });
  }; 
});

app.controller("NewTodoController",function($scope,TodoService,$location){
  $scope.addTodo = function(todo){
    TodoService.addTodo(todo).then(function(data){
      console.log(data);
      $location.path('/todos');
    });
  };
});

app.controller("EditTodosController",function($scope,TodoService,$location,$routeParams){
  TodoService.getATodo($routeParams.id).then(function(todo){
    $scope.todo = todo.data;
  });

   $scope.editTodo = function(todo){
    TodoService.editTodo(todo).then(function(){
      $location.path('/todos');
    });
  }; 
});