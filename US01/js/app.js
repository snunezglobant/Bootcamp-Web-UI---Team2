(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('SearchController', function($http, $scope) {
    $scope.results = [];
    // Setting the default value of the Class.
    $scope.style= 'center';

    $scope.animate = function () {
      $scope.style = 'goUp';
    };

    $scope.request = function( query ) {
      $http.get('https://api.spotify.com/v1/search?q='+query+'&type=artist,album').success(function(data) {
          $scope.results = data;
        });
    };

  /* End of SearchController */
  });

  app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.ngEnter);
          });
          event.preventDefault();
        }
      });
    };
    /* End of ngEnter directive */
  });

/* End of the World */
})();