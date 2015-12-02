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

// edit a todo
router.put('/:id',function(req,res){
  db.Todo.findByIdAndUpdate(req.params.id, req.body, function(error,todo){
    res.status(200).send(todo);
  });
});

// router.get('/:id',function(req,res){
//   db.findById()
// });

// router.delete('/:id',function(req,res){
//   db.findById(req.params.id,function(error,todo){
//     // res
//   });
// });

module.exports = router;