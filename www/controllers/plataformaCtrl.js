var theApp7 = angular.module('theApp7', []);
theApp7.controller('plataformaCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {

    $scope.theurl = "qQ5Fr1mn";
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



