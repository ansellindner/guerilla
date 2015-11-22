/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */

var express = require('express');
var api = express.Router();

	// /api
	api.get('/', function(req, res, next) {
		// Do some logic
		res.json({ 
			name: 'api',
			value: 'This is the api root.',
			calls: {
				start: {
					route: 'api/start',
					res: 'name, peers, block, difficulty, etc'
				},
				getBlock: {
					route: 'api/getblock',
					res: 'int'
				},
				validateAddress: {
					route: 'api/validateAddress',
					res: 'boolean'
				}
			}
		})
	});
	// /api/start
	api.get('/start', function(req, res, next) {
	    res.json({ 
			name: 'start',
			value: 'somestring1',
			peers: 'someVar1',
			block: 'someVar2',
			difficulty: 'someVar3' 
		})
	});
	//
	api.get('/1', function(req, res) {
		// some query of bitcoin or the system
		res.json({ 
			name: '1',
			value: 'somestring1' })
	});
	//
	api.get('/2', function(req, res) {
		// some query of bitcoin or the system
		res.json({ 
			name: '2',
			value: 'somestring2' })
	});
	// undefined route handler
	api.get('/*', function(req, res) {
		// 404
		res.json({ 
			error: '404: that call is not recognized.' })
	});

module.exports = api;