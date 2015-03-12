(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('DataController', function($scope, $http){
        var metallica="Ride The Lightning "
        $http.get('https://api.spotify.com/v1/albums/7a1dlwArQK6OCHkr2SNlZR').
          success(function(response) {
            $scope.album= response;
            $cope.avoid="[ ]";
               
          });      
  });
})();
