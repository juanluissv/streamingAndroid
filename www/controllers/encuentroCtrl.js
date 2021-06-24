var theApp9 = angular.module('theApp9', []);
theApp9.controller('encuentroCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "pXJWiS8T";
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
