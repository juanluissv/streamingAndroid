var theApp4 = angular.module('theApp4', []);
theApp4.controller('opinionCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

$scope.theurl = "aDts4ngy";
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



