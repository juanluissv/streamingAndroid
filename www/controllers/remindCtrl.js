var theApp11 = angular.module('theApp11', []);
theApp11.controller('remindCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "FPapq1k8";
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



