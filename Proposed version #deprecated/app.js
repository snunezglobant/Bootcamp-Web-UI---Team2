var app = angular.module('myApp', [('ngRoute')]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'SearchController',
      templateUrl: 'us1.html'
    })
    .when('/us2/:id', {
      controller: 'dataCtrl',
      templateUrl: 'us2.html'
    })
    .when('/us5/:id', {
      controller: 'albumController',
      templateUrl: 'us5.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.factory('httpService', function ($http) {
var factory = {};

factory.getTodo = function(input) {
    var promise;
    if (!promise) {
        // $http 
        promise = $http.get('https://api.spotify.com/v1/search?q='+input+'&type=album,artist').
        then(function(response) {
           // details.id=response.data.artists.items[0].id// The then function here is an opportunity to modify the response
            console.log(response);
            // The return value gets picked up by the then in the controller.
            return response.data;
        });
    }
    // Return the promise to the controller
    return promise;
};

factory.getArtist = function(id) {
        var promise;
        if (!promise) {
            // $http 
            promise = $http.get('https://api.spotify.com/v1/artists/'+id).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        }
        // Return the promise to the controller
        return promise;
    };

    factory.getArtistAlbums = function(id) {
        var promise;
        if (!promise) {
            // $http 
            promise = $http.get('https://api.spotify.com/v1/artists/'+id+'/albums').then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        }
        // Return the promise to the controller
        return promise;
    };

    factory.getRelatedAlbums = function(id) {
        var promise;
        if (!promise) {
            // $http 
            promise = $http.get('https://api.spotify.com/v1/artists/'+id+'/related-artists').then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        }
        // Return the promise to the controller
        return promise;
    };

    factory.getAlbum = function(id) {
        var promise;
        if (!promise) {
            // $http 
            promise =$http.get('https://api.spotify.com/v1/albums/'+id).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        }
        // Return the promise to the controller
        return promise;
    };

    factory.getAlbumTracks = function(id) {
        var promise;
        if (!promise) {
            // $http 
            promise = $http.get('https://api.spotify.com/v1/albums/'+id+'/tracks').then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        }
        // Return the promise to the controller
        return promise;
    };   

    return factory;
});
 
  app.controller('SearchController', function ($http, $scope, httpService) {
    $scope.results = [];
    // Setting the default value of the Class.
    $scope.style= 'center';
 
    $scope.animate = function () {
      $scope.style = 'goUp';
    };

    


 
    $scope.request = function() {
      if ($scope.query.length > 0) 
      {
        // $http.get('https://api.spotify.com/v1/search?q='+$scope.query+'&type=artist,album').success(function(data) {
        //     $scope.results = data;
         httpService.getTodo($scope.query).then(function (data) {
            $scope.results = data;
          });
      } else {
        $scope.results = [];
      }
    };
 
  /* End of SearchController */
  });
 

app.controller("dataCtrl", function($scope, $http, $routeParams, httpService) {

  
    /*$http.get('https://api.spotify.com/v1/artists/'+$routeParams.id).
    success(function(data, status, headers, config) {
      $scope.data = data;
    }).
    error(function(data, status, headers, config) {
      $scope.status=status;
    });*/
  httpService.getArtist($routeParams.id).then(function (data){
    $scope.data=data;
  });

  httpService.getArtistAlbums($routeParams.id).then(function (data){
    $scope.albums=data.items;
    $scope.albumid=data.items[1].id;
  });

  httpService.getRelatedAlbums($routeParams.id).then(function (data){
    $scope.artistsr=data.artists;
  });

  
});

app.controller("albumController", function($scope,$http,$routeParams, httpService){

  httpService.getAlbum($routeParams.id).then(function (data){
    $scope.album=data;
  });

  httpService.getAlbumTracks($routeParams.id).then(function (data){
    $scope.tracks=data.items;
  });
  
});
