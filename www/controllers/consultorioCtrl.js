var theApp10 = angular.module('theApp10', []);
theApp10.controller('consultorioCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "LyON9x3D";
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
