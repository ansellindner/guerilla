/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */



angular.module('guerilla', ['mainController', 'homeController', 'explorerController']);

// configure our routes
// TODO put in own file
angular.module('guerilla').config(function($routeProvider) {

	// mainController is included in the html
    
    $routeProvider
        // route and controller for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'mainController'
        })

});