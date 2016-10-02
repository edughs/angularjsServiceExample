var base_url = "http://comicvine.gamespot.com/api/";
var api_key = "9bd325b3169053b9cb12260adc04501ec8e4f2ca";
var format = "json";
var limit = "30";
var url = base_url + "series_list" + "/?api_key=" + api_key + "&format=" + format + "&limit=" + limit ;//+ offset + field_list + sort;
var url2 = base_url + "movies" + "/?api_key=" + api_key + "&format=" + format + "&limit=" + limit ;

 
app.factory('series', ['$http', function($http) { 
  return $http.get(url) 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

app.factory('movies', ['$http', function($http) { 
  return $http.get(url2) 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

