(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('SearchController', function($http, $scope) {

    $scope.$watch('query', function(newVal) {
      $scope.results = [];
    // Setting the default value of the Class.
    $scope.style= 'center';

    $scope.animate = function () {
      $scope.style = 'goUp';
    };

    if (newVal) {    
      $http.get('https://api.spotify.com/v1/search?q='+newVal+'&type=artist,album').success(function(data) {
        $scope.results = data;
      });
    }
  });
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
  });

  /* End of the World */
})();