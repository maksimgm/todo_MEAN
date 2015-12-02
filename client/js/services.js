app.service("TodoService",function($http){
  return{
    getTodos: function(){
      return $http.get('/api/todos');
    },


    addTodo: function(todo){
      return $http.post('/api/todos', todo);
    },


  };
});