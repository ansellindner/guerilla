/*
 *	This is an example app that can be added to the client package
 *	
 */

var express = require('express');
var demoApp2 = express();

	// set views
    demoApp2.set('views', __dirname + '/views');

	// config here for the /demoApp route
	demoApp2.use(express.static('public'));

	// middleware here for the /demoApp route

	demoApp2.get('/', function(req, res) {
	  res.render('index')
	});

	demoApp2.get('/page2', function(req, res) {
	  res.send('demoApp router page2!')
	});

module.exports = demoApp2;