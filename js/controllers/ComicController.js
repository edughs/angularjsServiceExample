app.controller('ComicController', ['$scope', 'series', function($scope, series) { 
  series.success(function(data) { 
    $scope.series_list = data; 
  });
}]);