var theApp3 = angular.module('theApp3', []);
theApp3.controller('player13Ctrl', ['$scope', '$stateParams', '$ionicScrollDelegate',  '$http', 
 function($scope, $stateParams, $ionicScrollDelegate,  $http) {


 var myid;



 var theId = $stateParams.id;
 var thei = $stateParams.i;



  var playerInstance = jwplayer("myElement654");


var callingvid = function() {

  $http.get('https://cdn.jwplayer.com/v2/playlists/' + thei, {
    skipAuthorization: true
  }).then(function(response) {
    for (var i = 0; i < response.data.playlist.length; i++) {
      if (response.data.playlist[i].mediaid === theId) {
        myid = response.data.playlist[i];
      }
      response.data.playlist[i]  
    }
var thefile
var playfun = function () {
        if ((myid.sources[1] != undefined) && (myid.sources[1].type != "audio/mp4")){
            thefile = myid.sources[1].file            
        }        
        if ((myid.sources[2] != undefined) && (myid.sources[2].type != "audio/mp4")){
         thefile = myid.sources[2].file
        }
        if ((myid.sources[3] != undefined) && (myid.sources[3].type != "audio/mp4")){
            thefile = myid.sources[3].file
        }
playerInstance.setup({
    file: thefile,
  "width": "100%",
   "height": "100%",
   "stretching": "fill",
  "autostart": true,
  "androidhls": true,
  "mute": false,
  "volume": 100,
  "primary": "html5"
});
playerInstance.on('ready', function() {
    playerInstance.play();    
    playerInstance.setMute(false);
    playerInstance.setVolume(100);
    playerInstance.setMute(true);
    playerInstance.setVolume(0);
    playerInstance.setMute(false);
    playerInstance.setVolume(100);
  })
}
playfun();
});
}
callingvid();





























}]);



