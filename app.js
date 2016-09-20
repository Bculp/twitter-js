var express = require("express");
var app = express();

var volleyball = require("volleyball");

var nunjucks = require('nunjucks');

var obj = {
	 title : "An example",
	 people : [
	 	{ name : "Gandalf" },
		{ name : "Frodo" },
		{ name : "Hermione" },
	 ]	
};


//specifically for res.render, not for any other res
nunjucks.configure('views', {noCache : true}); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.listen(3000, function (){
  console.log("Server is listening...");
});

app.use(volleyball);

app.use("/special", function (req, res, next) {
  console.log("You've reached a special area");
  res.render("index", obj);

  });

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path);
  next();
  });

app.get("/", function (request, response, next) {
  console.log("Welcome home beatch.");

  response.send("Welcome to the show");

});
