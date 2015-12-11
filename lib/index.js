/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */

// Require in the explorers.json for default explorer
var config = require( './explorers/explorers' );

// configure the mini express instance
// order is important
// TODO document this
module.exports = function (mini) {
	// set the location of guerilla public assets /guerilla//public/img will be /img
	mini.use(express.static(__dirname + '/guerilla/public')); 

	// Routes =======================================
	// /admin for settings
	mini.use( '/admin', require( './config' ));
    // /api for bitcoind and system
    mini.use( '/api', require( './network' ));
    // /explorer for third party explorers
    mini.use( '/explorer', require( './explorers/' + config.default ));

    // everything else route to guerilla ui
    mini.use( '*', require( './client/index.html' ));
};