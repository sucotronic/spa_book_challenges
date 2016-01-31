var movieSearchApp = angular.module('movieSearchApp', ['ngResource']);

movieSearchApp.controller("inputController", function($scope, $rootScope, searchFactory, $resource){
    var movies = $resource("search/:query");
    $scope.keyPressed = function() {
        if ($scope.textToSearch.length > 0)
            $rootScope.$broadcast("search", $scope.textToSearch, movies);
        else
            $rootScope.$broadcast("results", []);
    }
}).factory("searchFactory", function($rootScope) {
    
    $rootScope.$on("search", function(e, msg, movies) {
        movies.get({query:msg}).$promise.then(function(result){
          $rootScope.$broadcast("results", result.results);
        });
    });
    return 0;
}).controller("resultsController", function($scope, $rootScope){
    $rootScope.$on("results", function(e, msg){
        $scope.results = msg;
    });
});;

