var landscapingApp = angular.module('landscapinApp', ['ui.router']);

landscapingApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('service', {
            url:'/service/:serviceId',
            templateUrl: function($stateParams){ return $stateParams.serviceId+'.html';}
        }).state('product', {
            url:'/product/:productId',
            views: {
                "": {
                    templateUrl:'productView.html',
                    controller: 'productViewController'
                },
                "header@product": {
                    templateUrl:'productViewHeader.html',
                    controller: 'productViewHeader'
                },
                "detail@product": {
                    templateUrl:'productViewDetail.html',
                    controller: 'productViewDetail'
                }
            }
        });
        
});
landscapingApp.controller("navigationController", function($scope){
   $scope.services = [
      {state:'lawn_maintenance', title:'lawn maintenance'},
      {state:'lanscaping', title:'lanscaping'},
      {state:'shrub_pruning', title:'shrub pruning'},
      {state:'exterior_home_staging', title:'exterior home staging'}
   ]; 
   $scope.products = [
      {state:'custom_decks', title:'custom decks'},
      {state:'fountains', title:'fountains'},
      {state:'swimming_pools', title:'swimming pools'}
   ]; 
}).controller("productViewController", function($scope){
    
}).controller("productViewHeader", function($scope, $stateParams){
    $scope.title=$stateParams.productId;
}).controller("productViewDetail", function($scope, $stateParams){
    $scope.text=$stateParams.productId;
});

