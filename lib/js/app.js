var app = angular.module('myApp', ['ngRoute','appControllers', 'angular.filter']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      controller: 'SearchController',
      templateUrl: 'homepage.html'
  })
  .when('/artist/:id', {
      controller: 'artistController',
      templateUrl: 'artist.html'
  })
  .when('/album/:id', {
      controller: 'albumController',
      templateUrl: 'album.html'
  })
  .otherwise({
      templateUrl:'404.html'
  });
});


app.factory('httpService', function ($http) {
    var factory = {};

    factory.getAll = function(input) {
        var promise;
        if (!promise) {
        // $http 
        promise = $http.get('https://api.spotify.com/v1/search?q='+input+'&type=album,artist').
        then(function(response) {

            /* The then function here is an opportunity to modify the response
            The return value gets picked up by the then in the controller.*/
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
                return response.data;
            });
        }
        // Return the promise to the controller
        return promise;
    };   

    return factory;
});