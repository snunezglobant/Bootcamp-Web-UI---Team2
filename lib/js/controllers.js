var appControllers=angular.module("appControllers",[]);

appControllers.controller('MainController',function($scope){
  $scope.refresh=function(){
    location.reload();
  }
});

appControllers.controller('SearchController', function ($scope, httpService) {
    $scope.results = [];
    // Setting the default value of the Class.
    $scope.style= 'center';
 
    $scope.animate = function () {
      $scope.style = 'goUp';
    };

    $scope.request = function() {
      if ($scope.query.length > 0) 
      {
         httpService.getAll($scope.query).then(function (data) { //get albums+artists
            $scope.results = data;
          });
      } else {
        $scope.results = [];
      }
    }; 
  /* End of SearchController */
});
 

appControllers.controller("artistController", function($scope, $routeParams, httpService) {

  httpService.getArtist($routeParams.id).then(function (data){ //get artist info
    $scope.data=data;
  });

  httpService.getArtistAlbums($routeParams.id).then(function (data){ //get artist album 
    $scope.albums=data.items;
  });

  httpService.getRelatedAlbums($routeParams.id).then(function (data){ //get related-artists 
    $scope.artistsr=data.artists;
  });
  /* End of artistController */
});

appControllers.controller("albumController", function($scope,$routeParams, httpService, filterFilter){

  httpService.getAlbum($routeParams.id).then(function (data){//get album
    $scope.album=data;
  });

  httpService.getAlbumTracks($routeParams.id).then(function (data){ //get album tracks
    $scope.tracks=data.items;
    
    var disc2 = filterFilter($scope.tracks, {disc_number: '2'});
        $scope.disc2=disc2.length;
  });
  /* End of albumController */
});