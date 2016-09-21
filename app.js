var express = require("express");
var app = express();
var volleyball = require("volleyball");
var nunjucks = require('nunjucks');
var routes = require("./routes/");
var bodyParser = require("body-parser");
var socketio = require("socket.io");


//specifically for res.render, not for any other res
nunjucks.configure('views', {noCache : true}); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

var server = app.listen(3000, function (){
  console.log("Server is listening...");
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var io = socketio.listen(server);
app.use("/", routes(io));
app.use(volleyball);


app.use(express.static("public"));






// app.use("/special", function (req, res, next) {
//   console.log("You've reached a special area");
//   res.render("index", obj);

//   });

// app.use(function (req, res, next) {
//   console.log(req.method + " " + req.path);
//   next();
//   });

// app.get("/", function (request, response, next) {
//   console.log("Welcome home beatch.");

//   response.send("Welcome to the show");

// });
