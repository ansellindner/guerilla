/*!
 * guerilla-mini
 * Copyright(c) 2015 Mini Computing, LLC
 * MIT Licensed
 */

// create the module and name it miniApp
var guerilla = angular.module('guerilla', ['ngRoute', 'pageslide-directive']);

// configure our routes
guerilla.config(function($routeProvider) {
    $routeProvider

        // route and controller for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

});

// create the controller and inject Angular's $scope
guerilla.controller('mainController', function($scope, $http) {

    // GET ip
    function main($http) {
        $http({ method: 'GET', url: '/api/ip' })
            .then(function successCallback(response) {
                $scope.info.ip = response.ip;
            }, function errorCallback(response) {
                $scope.info.ip = 'ERROR';
            });
        }
    

    // GET block the network is on
    $http({
        method: 'GET',
        url: '/api/externalblock'
    }).then(function successCallback(response) {
        var networkblock = response.networkblock;
    }, function errorCallback(response) {
        var networkblock = 0;
    });

    // GET info
    $http({
        method: 'GET',
        url: '/api/getinfo'
    }).then(function successCallback(response) {
        $scope.info.peers = response.connections;
        $scope.info.difficulty = response.difficulty;
        $scope.info.protocolversion = response.protocolversion;
        var currenctblock = response.blocks;

        $scope.info.blocksbehind = networkblock - currentblock;

    }, function errorCallback(response) {
        $scope.info = 'ERROR';
    });

    $scope.message = 'Everyone come and see how good I look!';
});

guerilla.controller('exploreController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

module.exports = guerilla;