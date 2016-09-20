var _ = require('lodash');

var data = [];
var counter = 0;

function add (name, content) {
  data.push({ name: name, content: content, tweetid: counter++ });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };



var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


data = [ { name: 'Gabriel OLogn',
    content: 'Fullstack Academy is wonderful! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'Joe Dunderproto',
    content: 'Fullstack Academy is cool! The instructors are just so funny. #fullstacklove #codedreams' },
  { name: 'Ayana Binder',
    content: 'Fullstack Academy is wonderful! The instructors are just so sweet. #fullstacklove #codedreams' },
  { name: 'Scott Claujure',
    content: 'Fullstack Academy is breathtaking! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Scott OLogn',
    content: 'Fullstack Academy is wonderful! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'Dave Stackson',
    content: 'Fullstack Academy is mindblowing! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Nimit McQueue',
    content: 'Fullstack Academy is awesome! The instructors are just so cool. #fullstacklove #codedreams' },
  { name: 'Scott Ternary',
    content: 'Fullstack Academy is amazing! The instructors are just so mindblowing. #fullstacklove #codedreams' },
  { name: 'Joe OLogn',
    content: 'Fullstack Academy is mindblowing! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Dave OLogn',
    content: 'Fullstack Academy is awesome! The instructors are just so breathtaking. #fullstacklove #codedreams' } ];

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}


