var app = angular.module('todoApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.
    when('/todos',{
      templateUrl: './templates/allTodos.html',
      controller: 'TodosController'
    }).
    when('/todos/new',{
      templateUrl:'./templates/newTodo.html',
      controller: 'NewTodoController'
    }).
    when('/todos/:id/edit',{
      templateUrl: './templates/editTodo.html',
      controller: 'EditTodosController'
    })
    .otherwise({redirectTo: '/todos'});

  $locationProvider.html5Mode(true);
}]);
