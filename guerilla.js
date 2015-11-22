#!/usr/bin/env node

/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */

var fs = require('fs');

var express = require('express');
var bitcoin = require('bitcoinjs-lib');
var config = require('./config.json');

var mini = express();
mini.set('view engine', 'ejs');

// enable to the /api routes
var api = require('./api')(mini);
// enable the docs & ui routes
var client = require('./client/app-list')(mini);


mini.listen(config.PORT);
console.log('');
console.log('    __  ____       _    ______                            __  _            ');
console.log('   /  |/  (_)___  (_)  / ____/___  ____ ___  ____  __  __/ /_(_)___  ____ _');
console.log('  / /|_/ / / __ \\/ /  / /   / __ \\/ __ `__ \\/ __ \\/ / / / __/ / __ \\/ __ `/');
console.log(' / /  / / / / / / /  / /___/ /_/ / / / / / / /_/ / /_/ / /_/ / / / / /_/ / ');
console.log('/_/  /_/_/_/ /_/_/   \\____/\\____/_/ /_/ /_/ .___/\\__,_/\\__/_/_/ /_/\\__, /  ');
console.log('                                         /_/                      /____/   ');
console.log('');
console.log('Your Mini can now be accessed via your browser at "localhost" (port ' + config.PORT + ')');
console.log('===========================================================================');
console.log('');
console.log('================================');
console.log('');
console.log('The api can be found at localhost/api');
console.log('');
console.log('Supporting docs can be found at localhost/docs');
console.log('');
console.log('================================');
console.log('');