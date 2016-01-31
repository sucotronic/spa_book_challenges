var libraryApp = angular.module('libraryApp', []);

libraryApp.controller('libraryController', function ($scope) {
  $scope.user = {'name': 'Félix'};
  $scope.library = {
      'name': 'Actur public library', 
      'address': 'Avda. Gómez Avellaneda 23',
      'phone': '976857412'
  };
  $scope.books = [
    {'title': 'Visit Spain',
     'author': 'Myself',
     'desc': 'Enjoy an incredible country'},
    {'title': 'Don Quixote',
     'author': 'Cervantes',
     'desc': 'Life and dead of a dreamer'}
  ];
});