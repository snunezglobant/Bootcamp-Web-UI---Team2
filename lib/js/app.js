var app = angular.module('myApp', ['ngRoute','appControllers', 'angular.filter']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'SearchController',
      templateUrl: 'us1.html'
    })
    .when('/us2/:id', {
      controller: 'artistController',
      templateUrl: 'us2.html'
    })
    .when('/us5/:id', {
      controller: 'albumController',
      templateUrl: 'us5.html'
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