var express = require("express");
var app = express();

var volleyball = require("volleyball");

var nunjucks = require('nunjucks');

// var morgan = require("morgan");
//var title = "An example";

var obj = {
	 title : "An example",
	 people : [
	 	{ name : "Gandalf" },
		{ name : "Frodo" },
		{ name : "Hermione" },
	 ]	
};


var nunjucksRes = nunjucks.render('./views/index.html', obj);

app.listen(3000, function (){
  console.log("Server is listening...");
});

app.use(volleyball);
// app.use(morgan("combined"));


app.use("/special", function (req, res, next) {
  console.log("You've reached a special area");
  res.send(nunjucksRes);
  });

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path);
  next();
  });

app.get("/", function (request, response, next) {
  console.log("Welcome home beatch.");

  response.send("Welcome to the show");

});
