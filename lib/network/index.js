/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */

'use strict';

/**================================= MODULE DEPENDENCIES ==*/
var express = require('express');
var bitcoin = require('bitcoin');
var config = require('../../config');
var getJson = require('get-json');

// begin new express router instance
var api = express.Router();
// set authentication for bitcoind
var client = new bitcoin.Client({
	host:config.btc.host,
	port:config.btc.port,
	user:config.btc.user,
	pass:config.btc.pass,
	timeout: config.btc.timeout
});

/**================================= MIDDLEWARE ==*/
// TODO: logging, maybe caching

/**================================= API ROUTES ==*/
api.get('/', function(req, res) {
	// /api/
	res.status(200).json({ message: "API functioning properly. Go to api/minihelp for a list of calls." })
});

api.get('/minihelp', function(req, res) {
	// /api/minihelp - display json of info about routes
	var help = require('./network-help');
	// simple json response with json header
	res.status(200).json(help)
});

// Get your network's external facing ip
api.get('/ip', function (req, res) {
	// /api/ip
	getJson('https://api.ipify.org/?format=json', function(err, response) {
		if (err) return res.send(err);
		res.json({ external_ip: response.ip })
	});
});

// Get the external block from the network not the Mini
api.get('/externalblock', function (req, res) {
	// /api/externalblock
	getJson('https://blockchain.info/q/getblockcount', function(err, response) {
		if (err) return res.send(err);
		res.json({ networkblock: response })
	});
});

/*================================= API bitcoind calls ==*/

api.get('/help', function(req, res) {
	// /api/help
	client.cmd('help', function(err, response, resHeaders) {
		if (err) return res.send(err);
		res.json({ "bitcoin_help": response })
	});
});

// Get info about your bitcoin instance
api.get('/getinfo', function (req, res) {
	// /api/getinfo
	client.cmd('getinfo', function(err, response, resHeaders) {
		if (err) return res.send(err);
	    res.json(response)
	});
});


// Get the Mini's block count
api.get('/getblock', function(req, res) {
	// /api/getblock
	client.cmd('getblockcount', function(err, response, resHeaders) {
		if (err) return res.send(err);
		res.json({ "blockcount": response })
	});
});

// Get the network's current proof of work difficulty
api.get('/getdifficulty', function(req, res) {
	// /api/getdifficulty
	client.cmd('getdifficulty', function(err, response, resHeaders) {
		if (err) return res.send(err);
		res.json({ "difficulty": response })
	});
});

// Get a bunch of info about your connected peers
api.get('/getpeerinfo', function(req, res) {
	// /api/getpeerinfo
	client.cmd('getpeerinfo', function(err, response, resHeaders) {
		if (err) return res.send(err);
		res.json({ "peerinfo": response })
	});
});

// Validate an address returns json
api.get('/validate/:addr', function(req, res) {
	// /api/validate/
	client.cmd('validateaddress',req.params.addr,function(err, response, resHeaders) {
	    if (err) return res.send(err);
	    res.json(response);
	});
});

// cover for all other bitcoind rpc calls
api.get('/bitcoin/:cmd', function(req, res) {
	// api/bitcoin/
	client.cmd(req.params.command, function(err, response, resHeaders) {
	    if (err) return res.send(err);
	    res.json(response);
	});
});

// catch undefined routes
api.get('/*', function(req, res) {
	// 404
	res.json({ 
		error: '404: that call is not recognized.' })
});

// export all these routes to the mini instance of expressjs
module.exports = api;