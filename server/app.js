var express = require("express");
var app = express();
var todoRoutes = require('./routes/todos');
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

var morgan = require('morgan');
app.use(morgan('tiny'));

app.use('/css',express.static(path.join(__dirname, "../client/css")));
app.use('/js',express.static(path.join(__dirname, "../client/js")));
app.use('/templates',express.static(path.join(__dirname, "../client/js/templates")));

app.use('/api/todos', todoRoutes);

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(3000,function(){
  console.log("Server is listening to port 3000");
});
