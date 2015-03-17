(function(){

  var app = angular.module('spotifyApp', []);

  app.controller('DataController', function($scope, $http){

        var albumId = "7HcHPb1P9mubh0vyDdawAv";
        $http.get('https://api.spotify.com/v1/albums/'+albumId).
          success(function(response) {
            console.log(response);
            $scope.album= response;               
          });      
  });




app.controller("TrackListCtrl", function($scope, $http) {

    var albumId = "7HcHPb1P9mubh0vyDdawAv";
    $http.get('https://api.spotify.com/v1/albums/'+albumId+'/tracks').
    success(function(data, status, headers, config) {
      $scope.tracks = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      $scope.status=status;
    });
});


})();