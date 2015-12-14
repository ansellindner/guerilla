/**
 *  scripts/controllers/mainController.js
 *
 *  
 *
 */



angular.module('mainController', [])
    
    .controller('mainController', function($scope, $http) {

        main();
 
        // GET ip
        function main($http) {
            $http({ method: 'GET', url: '/api/ip' })
                .then(function successCallback(response) {
                    $scope.info.ip = response.ip;
                }, function errorCallback(response) {
                    $scope.info.ip = 'ERROR';
                });
        
            $http({ method: 'GET', url: '/api/livesince' })
                .then(function successCallback(response) {
                    var uiRunning = Date.now() - response.livesince;
                    var min   = 60000;
                    var hr    = 3600000;
                    var day   = 86400000;
                    var week  = 604800000;
                    if (uiRunning < min) {
                        $scope.info.livesince = '< 1 min';
                    }
                    if (uiRunning < hr) {
                        var time = Math.round(uiRunning/min);
                        $scope.info.livesince = time +' mins';
                    }
                    if (uiRunning < day) {
                        var time = Math.round(uiRunning/hr);
                        $scope.info.livesince = time +' hrs';
                    }
                    if (uiRunning < week) {
                        var time = Math.round(uiRunning/day);
                        $scope.info.livesince = time +' days';
                    }
                    if (uiRunning < week*4) {
                        var time = Math.round(uiRunning/week);
                        $scope.info.livesince = time +' weeks';
                    }
                    if (uiRunning >= week*4) {
                        var time = Math.round(uiRunning/(week*4));
                        $scope.info.livesince = time +' months';
                    }
                }, function errorCallback(response) {
                    $scope.info.livesince = 'ERROR';
                });


            // GET block the network is on
            $http({ method: 'GET', url: '/api/externalblock' })
                .then(function successCallback(response) {
                    var networkblock = response.networkblock;
                }, function errorCallback(response) {
                    var networkblock = 0;
                });

            // GET info
            $http({ method: 'GET', url: '/api/getinfo' })
                .then(function successCallback(response) {

                    $scope.info.peers = response.connections;
                    $scope.info.difficulty = response.difficulty;
                    $scope.info.protocolversion = response.protocolversion;
                    $scope.info.miniblock = response.blocks;
                    var currenctblock = response.blocks;

                    $scope.info.blocksbehind = networkblock - currentblock;

                }, function errorCallback(response) {
                    $scope.info = 'ERROR';
                });



            $scope.message = 'Everyone come and see how good I look!';
        }
    });

    