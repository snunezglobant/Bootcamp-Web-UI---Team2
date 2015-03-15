

var app = angular.module("MyApp", []);



app.controller("dataCtrl", function($scope, $http) {

  $("#search").click(function(){
    var band = $('#band').val();
    $http.get('https://api.spotify.com/v1/artists/'+band).
    success(function(data, status, headers, config) {
      $scope.data = data;
    }).
    error(function(data, status, headers, config) {
      $scope.status=status;
    });

  });
});


app.controller("showAlbumCtrl", function($scope, $http) {

  $("#showAlbums").click(function(){
    var band = $('#band').val();
    $http.get('https://api.spotify.com/v1/artists/'+band+'/albums').
    success(function(data, status, headers, config) {
      $scope.albums = data.items;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      $scope.status=status;
    });

  });
});


app.controller("showRelatedCtrl", function($scope, $http) {

  $("#showRelatedArtists").click(function(){
    var band = $('#band').val();
    $http.get('https://api.spotify.com/v1/artists/'+band+'/related-artists').
    success(function(data, status, headers, config) {
      $scope.artists = data.artists;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      $scope.status=status;
    });

  });
});

app.controller("MostrarOcultar", function($scope){

  $scope.show = true;

  $scope.Mostrar = function() {
    $scope.show = false;
  };

  $scope.Ocultar = function() {
    $scope.show = true;
  };
});