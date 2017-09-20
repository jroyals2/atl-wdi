/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const bodyParser = require('body-parser');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
const todosController = require("./controllers/todos.js");
/* set up the application params*/

// log
app.use( logger('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));

// controllers
app.use("/todos", todosController);

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// /* INDEX TODOS */
// app.get('/todos', function(req,res) {
//   var seededTodos = [
//     {
//       description: "get beer",
//       urgent: true
//     }, {
//       description: "dry cleaning",
//       urgent: false
//     }
//   ];

//   res.render('todos/index', {
//     todos: seededTodos
//   });
// });

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
