module.exports = function (io) {

  var express = require('express');
  var router = express.Router();
  // could use one line instead: var router = require('express').Router();
  var tweetBank = require('../tweetBank');

  router.get('/', function (req, res) {
    var apple = tweetBank.list();
    res.render( 'index', { tweets: apple, showForm: true} );

  // res.render( 'index', tweets );

  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true, name: name } );
  });

  router.get('/tweets/:id', function(req, res) {
    var id = Number(req.params.id);
    var list = tweetBank.find( {tweetid: id} );
    console.log("Yo");
    res.render( 'index', { tweets: list } );

  });

  router.post("/tweets", function (req, res){
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect("/");

  });

  return router;

}
