var express = require('express');

// start a new instance of express
var ui = express();

	// set views
    ui.set('views', __dirname + '/views');

	// middleware here for the /ui route
	ui.use(express.static(__dirname + '/public'));	

	ui.get('/', function(req, res, next) {
	    res.render('index', {
        	title: 'Mini Homepage'
        })
    });

	ui.get('/page2', function(req, res, next) {
	  res.send('ui router page2!')
	});

module.exports = ui;