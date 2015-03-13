(function(){
  var app = angular.module('spotifyApp', []);
 
  app.controller('SearchController', function($http, $scope) {
    $scope.results = [];
    // Setting the default value of the Class.
    $scope.style= 'center';
 
    $scope.animate = function () {
      $scope.style = 'goUp';
    };
 
    $scope.request = function() {
      if ($scope.query.length > 0) {
        $http.get('https://api.spotify.com/v1/search?q='+$scope.query+'&type=artist,album').success(function(data) {
            $scope.results = data;
          });
      } else {
        $scope.results = [];
      }
    };
 
  /* End of SearchController */
  });
 
/* End of the World */
})();