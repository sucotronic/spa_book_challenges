var imageApp = angular.module('imageApp', ['ngRoute']);

// configure our routes
imageApp.config(function($routeProvider) {    
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'nothing.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/image/:object', {
            templateUrl : 'image.html',
            controller  : 'objectController'
        });
});

// create the controller and inject Angular's $scope
imageApp.controller('mainController', function($scope) {
});

imageApp.controller('objectController', function($scope, $routeParams) {
    $scope.image = $routeParams.object+'.jpg';
});