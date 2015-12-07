var express = require('express');
var router = express.Router();
var db = require("../models");

// get all todos
router.get('/', function(req, res) {
  db.Todo.find({},function(err,todos){
    if(err) return res.json({err:err.message});
    res.status(200).send(todos);
  });
});


// post a todo
router.post('/', function(req, res) {
  db.Todo.create(req.body,function(err,todo){
    if(err) return res.json({err:err.message});
    res.json(todo);
  });
});

// show a specific todo
router.get('/:id',function(req,res){
  db.Todo.findById(req.params.id, function(err,todo){
    if(err) return res.json({err:err.message});
    res.status(200).send(todo);
  });
});

// edit a todo
router.put('/:id',function(req,res){
  db.Todo.findByIdAndUpdate(req.params.id, req.body, function(err,todo){
    if(err) return res.json({err:err.message});
    res.status(200).send(todo);
  });
});
// delete a todo
router.delete('/:id',function(req,res){
  db.Todo.findByIdAndRemove(req.params.id,function(err,todo){
    res.status(200).send(todo);
  });
});

module.exports = router;