var theApp13 = angular.module('theApp13', []);
theApp13.controller('geoCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "5iqCUArm";
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
