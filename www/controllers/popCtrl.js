var theApp12 = angular.module('theApp12', []);
theApp12.controller('popCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "RqUwolce";
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



