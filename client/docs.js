var express = require('express');
var docs = express();

	// middleware here for the /docs route
	docs.use(express.static(__dirname + '/public'));
	docs.set('views', __dirname + '/views');
	docs.set('view engine', 'ejs');

	// will handle any request that ends in /docs
	docs.get('/', function(req, res, next) {
	  res.send('hello! here you will find some docs for the mini.')
	});

	docs.get('/2', function(req, res, next) {
	  res.send('some more docs')
	});

module.exports = docs;