(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('SearchController', function($http, $scope){

    $scope.$watch('query', function(newVal) {
      $scope.results = [];

      if (newVal) {
        $http.get('https://api.spotify.com/v1/search?q='+newVal+'&type=artist,album').success(function(data) {
          $scope.results = data;
        });
      }
    });
  });

  /* End of the World */
})();