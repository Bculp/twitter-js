var express = require("express");
var app = express();

var volleyball = require("volleyball");

// var morgan = require("morgan");

app.listen(3000, function (){
  console.log("Server is listening...");
});

app.use(volleyball);
// app.use(morgan("combined"));


app.use("/special", function (req, res, next) {
  console.log("You've reached a special area");
  next();
  });

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path);
  next();
  });

app.get("/", function (request, response, next) {
  console.log("Welcome home beatch.");

  response.send("Welcome to the show");

});
