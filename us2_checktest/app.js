// app.js

(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('SearchController', function($http, $scope){
    $scope.endpoints = [
      { name: 'artist' },
      { name: 'track' },
      { name: 'album' }
    ];
    $scope.selectedItem = '';

    $scope.$watch('searchTerm', function(newVal) {
      if (newVal) {
        $http.get('https://api.spotify.com/v1/search?q='+newVal+'&type='+ $scope.selectedItem.name).success(function(data) {
          $scope.results = data;
        });
      } else {
        $scope.results = [];
      }
    });

  });

})();
