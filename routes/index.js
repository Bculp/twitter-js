var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var apple = tweetBank.list();
  res.render( 'index', { tweets: apple} );

// res.render( 'index', tweets );

});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

// router.get("/stylesheets/style.css", function (req, res) {
// 	res.sendFile("/Users/brandonculp/fullstackAcademy/twitter-js/public/stylesheets/style.css");
// 
// 
// });


module.exports = router;