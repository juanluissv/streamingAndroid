var theApp5 = angular.module('theApp5', []);
theApp5.controller('videosCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {


$scope.theurl = "gXBa7AZD";
var callingvid = function() {
  $http.get('https://cdn.jwplayer.com/v2/playlists/' + $scope.theurl, {
    skipAuthorization: true
  }).then(function(response) {
    theplaylist = response.data.playlist;  
    $scope.results = response.data.playlist;
  });
}
callingvid();




















}]);



