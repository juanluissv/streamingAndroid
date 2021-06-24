var theApp1 = angular.module('theApp1', []);
theApp1.controller('noticiasCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "BlE5n0Fy";
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
