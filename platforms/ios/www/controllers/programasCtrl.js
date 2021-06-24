var theApp6 = angular.module('theApp6', []);
theApp6.controller('programasCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {



$( "#myElement654" ).remove();

var removefun = function(){
  $(".navbar").append( "<div id='myElement523'></div> " );

 var playerInstance = jwplayer("myElement523");
var thestring;

playerInstance.setup({
    file: thestring,
  "width": "100%",
   "height": "100%",
  "autostart": true,
  "androidhls": true,
  "mute": false,
  "volume": 100,
  "primary": "html5"
});
$( "#myElement523" ).remove();
};
removefun();




//$( "#myElement6541" ).remove();
var removefun2 = function(){
$(".navbar").append( "<div id='myElement6541'></div> " );
var playerInstance = jwplayer("myElement6541");
var thestring;

playerInstance.setup({
    file: thestring,
  "width": "100%",
   "height": "100%",
  "autostart": true,
  "androidhls": true,
  "mute": false,
  "volume": 100,
  "primary": "html5"
});
$( "#myElement6541" ).remove();
};
removefun2();



//$( "#myElement654" ).remove();
var removefun3 = function(){
$(".navbar").append( "<div id='myElement654'></div> " );
var playerInstance = jwplayer("myElement654");
var thestring;
playerInstance.setup({
    file: thestring,
  "width": "100%",
   "height": "100%",
  "autostart": true,
  "androidhls": true,
  "mute": false,
  "volume": 100,
  "primary": "html5"
});
$( "#myElement654" ).remove();
};
removefun3();










}]);



