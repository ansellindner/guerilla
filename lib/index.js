/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */

// Require in the explorers.json for default explorer
var express = require('express');
var config = require( './explorers/explorers' );
var path = require('path');
var config = require('../config');

// configure the mini express instance
// order is important
// TODO document this
module.exports = function (mini) {
	// set the location of guerilla public assets /guerilla/public/img will be /img
	mini.use(express.static( path.resolve( '/home/'+config.system.root+'/client' ))); 

	// Routes =======================================
	// /admin for settings
	mini.use( '/admin', require( './config' ));
    // /api for bitcoind and system
    mini.use( '/api', require( './network' ));
    // /explorer for third party explorers
    mini.use( '/explorer', require( './explorers/' + config.default ));

    // everything else route to guerilla ui
    mini.get( '/*', function (req, res) {
        res.sendFile( path.join('/home/'+config.system.root+'/client/index.html' ));
    });
};