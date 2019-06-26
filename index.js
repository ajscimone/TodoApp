var express = require('express'),
	app = express()

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res)
{
	res.send("Hello from express");
});

app.get('/api/todos', todoRoutes);

app.listen(3000, function(){
	console.log("App running on port 3000")
});

// Go to 	http://localhost:3000