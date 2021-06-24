var theApp12 = angular.module('theApp12', []);
theApp12.controller('popCtrl', ['$scope', '$ionicScrollDelegate',  '$http', 
 function($scope, $ionicScrollDelegate,  $http) {


var thelength;


// $( "#myElement654" ).remove();

// var removefun = function(){
//   $(".sidebar").append( "<div id='myElement654'></div> " );

//  var playerInstance = jwplayer("myElement654");
// var thestring;

// playerInstance.setup({
//     file: thestring,
//   "width": "100%",
//    "height": "100%",
//   "autostart": true,
//   "androidhls": true,
//   "mute": false,
//   "volume": 100,
//   "primary": "html5"
// });
// $( "#myElement654" ).remove();
// };
// removefun();




var theurl = "RqUwolce";
$scope.theurl = "RqUwolce";



var callingvid = function() {
  console.log('reseting');
  $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
    skipAuthorization: true
  }).then(function(response) {
    console.log(response.data.playlist);
      thelength = response.data.playlist.length + 4
    theplaylist = response.data.playlist;
var theplaylist2 = []

    for (var i = 0; i < theplaylist.length; i++) {
        theplaylist2.push(theplaylist[i])
function bubble(arr) {
      var len = arr.length;
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].title > arr[j + 1].title) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist2 = bubble(theplaylist2);
};
console.log(theplaylist2)


// for (var i = 0; i < theplaylist2.length; i++) {
//   console.log(parseInt(theplaylist2[i].title) + 1)
//   theplaylist2[i].title = (parseInt(theplaylist2[i].title) + 1)
// }


     $scope.results = theplaylist2;
  });
}
callingvid();

















}]);



