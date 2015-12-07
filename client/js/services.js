app.service("TodoService",function($http){
  return{
    getTodos: function(){
      return $http.get('/api/todos');
    },

    addTodo: function(todo){
      return $http.post('/api/todos', todo);
    },

    editTodo: function(todo){
      return $http.put('/api/todos/'+todo._id,todo);
    },

    getATodo: function(id){
      return $http.get('/api/todos/'+id);
    },

    deleteATodo: function(id){
      return $http.delete('/api/todos/'+ id);
    }
    
  };
});