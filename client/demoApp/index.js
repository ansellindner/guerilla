/*
 *	This is an example app that can be added to the client package
 *	
 */

var express = require('express');
var demoApp = express();

	// set views
    demoApp.set('views', __dirname + '/views');

	// config here for the /demoApp route
	demoApp.use(express.static('public'));

	// middleware here for the /demoApp route

	demoApp.get('/', function(req, res) {
	  res.render('index')
	});

	demoApp.get('/page2', function(req, res) {
	  res.send('demoApp router page2!')
	});

module.exports = demoApp;