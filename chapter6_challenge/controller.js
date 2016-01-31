var movieSearchApp = angular.module('movieSearchApp', []);

movieSearchApp.controller("inputController", function($scope, $rootScope, searchFactory){
    $scope.keyPressed = function() {
        $rootScope.$broadcast("search", $scope.textToSearch);
    }
}).factory("searchFactory", function($rootScope) {
    movies = ["Blade Runner", "Gladiator", "Toy Story", "Ghost in the shell"];
    $rootScope.$on("search", function(e, msg) {
        var results = movies.filter(RegExp.prototype.test.bind(new RegExp(msg, "i")));
        $rootScope.$broadcast("results", results);
    });
    return 0;
}).controller("resultsController", function($scope, $rootScope){
    $rootScope.$on("results", function(e, msg){
        $scope.results = msg;
    });
});;

