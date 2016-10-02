app.controller('MoviesController', ['$scope', 'movies', function($scope, movies) { 
  movies.success(function(data) { 
    $scope.movies_list = data; 
  });
}]);