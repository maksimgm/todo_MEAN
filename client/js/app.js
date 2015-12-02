var app = angular.module('todoApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.
    when('/todos',{
      templateUrl: './templates/allTodos.html',
      controller: 'TodosController'
    });
}]);
