var theApp14 = angular.module('theApp14', []);
theApp14.controller('player12Ctrl', ['$scope', '$stateParams', '$ionicScrollDelegate',  '$http', 
 function($scope, $stateParams, $ionicScrollDelegate,  $http) {

var theId = $stateParams.id;
var playerInstance = jwplayer("myElement6541");

var playfun = function () {
    $http.get('https://cdn.jwplayer.com/v2/media/' + theId, {
        skipAuthorization: true
    }).then(function(response) {
        thefile = response.data.playlist[0].sources[0].file;              
        jwplayer("myElement6541").setup({
            file: thefile,
            "width": "100%",
            "height": "100%",
            "autostart": true,
            "androidhls": true,
            "mute": false,
            "skin": {
                "name": "myskin2"
            }, 
            "volume": 100,
            "primary": "html5",
            "controls": true,
            "cast": {}
        });
    });
}
playfun();

}]);
