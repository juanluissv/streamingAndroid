var theApp14 = angular.module('theApp14', []);
theApp14.controller('player12Ctrl', ['$scope', '$stateParams', '$ionicScrollDelegate',  '$http', 
 function($scope, $stateParams, $ionicScrollDelegate,  $http) {


 var myid;



var theId = $stateParams.id;
var thei = $stateParams.i;
var theplaylist44 = [];
var theplaylist45 = [];
var thefile1
var theimage1
var thefile2
var theimage2
var thefile3
var theimage3
var thefile4
var theimage4
var thefile5
var theimage5
var thefile6
var theimage6
var thefile7
var theimage7
var thefile8
var theimage8
var thefile9
var theimage9
var thefile10
var theimage10
var thefile11
var theimage11
var thefile12
var theimage12
var thefile13
var theimage13
var thefile14
var theimage14
var thefile15
var theimage15






var callingvid = function() {

$( "#myElement6541" ).remove();
$(".Element99").append('<div id="myElement6541"></div>');

var playerInstance = jwplayer("myElement6541");


  $http.get('https://cdn.jwplayer.com/v2/playlists/' + thei, {
    skipAuthorization: true
  }).then(function(response) {


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
 theplaylist44 = bubble(response.data.playlist);

      console.log(theplaylist44)



    for (var i = 0; i < theplaylist44.length; i++) {
      if (theplaylist44[i].mediaid === theId) {
        theplaylist45[0] = theplaylist44[i];
        theplaylist45[1] = theplaylist44[i + 1]
        theplaylist45[2] = theplaylist44[i + 2]
        theplaylist45[3] = theplaylist44[i + 3]        
        theplaylist45[4] = theplaylist44[i + 4]        
        theplaylist45[5] = theplaylist44[i + 5]        
        theplaylist45[6] = theplaylist44[i + 6]        
        theplaylist45[7] = theplaylist44[i + 7]        
        theplaylist45[8] = theplaylist44[i + 8]        
        theplaylist45[9] = theplaylist44[i + 9]        
        theplaylist45[10] = theplaylist44[i + 10]        
        theplaylist45[11] = theplaylist44[i + 11]        
        theplaylist45[12] = theplaylist44[i + 12]        
        theplaylist45[13] = theplaylist44[i + 13]        
        theplaylist45[14] = theplaylist44[i + 14]        


      }



    }
    //console.log(theplaylist45[0])
    // console.log(theplaylist45[1])
    // console.log(theplaylist45[2])
    // console.log(theplaylist45[3])
    // console.log(theplaylist45[4])
    // console.log(theplaylist45[5])
    // console.log(theplaylist45[6])
    // console.log(theplaylist45[7])
    // console.log(theplaylist45[8])
    // console.log(theplaylist45[9])
    // console.log(theplaylist45[10])
    // console.log(theplaylist45[11])
    // console.log(theplaylist45[12])
    // console.log(theplaylist45[13])
    // console.log(theplaylist45[14])









var playfun = function () {

            theimage1 = theplaylist45[0].images[1].src                                  
        if ((theplaylist45[0].sources[1] != undefined) && (theplaylist45[0].sources[1].type != "audio/mp4")){
            thefile1 = theplaylist45[0].sources[1].file            
        }        
        if ((theplaylist45[0].sources[2] != undefined) && (theplaylist45[0].sources[2].type != "audio/mp4")){
            thefile1 = theplaylist45[0].sources[2].file
        }
        if ((theplaylist45[0].sources[3] != undefined) && (theplaylist45[0].sources[3].type != "audio/mp4")){
            thefile1 = theplaylist45[0].sources[3].file
        }

        if (theplaylist45[1] != undefined) {
            theimage2 = theplaylist45[1].images[1].src                                  
        if ((theplaylist45[1].sources[1] != undefined) && (theplaylist45[1].sources[1].type != "audio/mp4")){
            thefile2 = theplaylist45[1].sources[1].file
        }        
        if ((theplaylist45[1].sources[2] != undefined) && (theplaylist45[1].sources[2].type != "audio/mp4")){
            thefile2 = theplaylist45[1].sources[2].file
        }
        if ((theplaylist45[1].sources[3] != undefined) && (theplaylist45[1].sources[3].type != "audio/mp4")){
            thefile2 = theplaylist45[1].sources[3].file
        }
        }

        if (theplaylist45[2] != undefined) {
            theimage3 = theplaylist45[2].images[1].src                                            
        if ((theplaylist45[2].sources[1] != undefined) && (theplaylist45[2].sources[1].type != "audio/mp4")){
            thefile3 = theplaylist45[2].sources[1].file            
        }        
        if ((theplaylist45[2].sources[2] != undefined) && (theplaylist45[2].sources[2].type != "audio/mp4")){
            thefile3 = theplaylist45[2].sources[2].file
        }
        if ((theplaylist45[2].sources[3] != undefined) && (theplaylist45[2].sources[3].type != "audio/mp4")){
            thefile3 = theplaylist45[2].sources[3].file
        }
        }

        if (theplaylist45[3] != undefined) {
            theimage4 = theplaylist45[3].images[1].src                                            
        if ((theplaylist45[3].sources[1] != undefined) && (theplaylist45[3].sources[1].type != "audio/mp4")){
            thefile4 = theplaylist45[3].sources[1].file            
        }        
        if ((theplaylist45[3].sources[2] != undefined) && (theplaylist45[3].sources[2].type != "audio/mp4")){
            thefile4 = theplaylist45[3].sources[2].file
        }
        if ((theplaylist45[3].sources[3] != undefined) && (theplaylist45[3].sources[3].type != "audio/mp4")){
            thefile4 = theplaylist45[3].sources[3].file
        }
        }

        if (theplaylist45[4] != undefined) {
            theimage5 = theplaylist45[4].images[1].src                                  
        if ((theplaylist45[4].sources[1] != undefined) && (theplaylist45[4].sources[1].type != "audio/mp4")){
            thefile5 = theplaylist45[4].sources[1].file            
        }        
        if ((theplaylist45[4].sources[2] != undefined) && (theplaylist45[4].sources[2].type != "audio/mp4")){
            thefile5 = theplaylist45[4].sources[2].file
        }
        if ((theplaylist45[4].sources[3] != undefined) && (theplaylist45[4].sources[3].type != "audio/mp4")){
            thefile5 = theplaylist45[4].sources[3].file
        }
        }


        if (theplaylist45[5] != undefined) {
            theimage6 = theplaylist45[5].images[1].src                                            
        if ((theplaylist45[5].sources[1] != undefined) && (theplaylist45[5].sources[1].type != "audio/mp4")){
            thefile6 = theplaylist45[5].sources[1].file            
        }        
        if ((theplaylist45[5].sources[2] != undefined) && (theplaylist45[5].sources[2].type != "audio/mp4")){
            thefile6 = theplaylist45[5].sources[2].file
        }
        if ((theplaylist45[5].sources[3] != undefined) && (theplaylist45[5].sources[3].type != "audio/mp4")){
            thefile6 = theplaylist45[5].sources[3].file
        }        
        }


        if (theplaylist45[6] != undefined) {
            theimage7 = theplaylist45[6].images[1].src                                            
        if ((theplaylist45[6].sources[1] != undefined) && (theplaylist45[6].sources[1].type != "audio/mp4")){
            thefile7 = theplaylist45[6].sources[1].file            
        }        
        if ((theplaylist45[6].sources[2] != undefined) && (theplaylist45[6].sources[2].type != "audio/mp4")){
            thefile7 = theplaylist45[6].sources[2].file
        }
        if ((theplaylist45[6].sources[3] != undefined) && (theplaylist45[6].sources[3].type != "audio/mp4")){
            thefile7 = theplaylist45[6].sources[3].file
        }        
        }

        if (theplaylist45[7] != undefined) {
            theimage8 = theplaylist45[7].images[1].src                                  
        if ((theplaylist45[7].sources[1] != undefined) && (theplaylist45[7].sources[1].type != "audio/mp4")){
            thefile8 = theplaylist45[7].sources[1].file            
        }        
        if ((theplaylist45[7].sources[2] != undefined) && (theplaylist45[7].sources[2].type != "audio/mp4")){
            thefile8 = theplaylist45[7].sources[2].file
        }
        if ((theplaylist45[7].sources[3] != undefined) && (theplaylist45[7].sources[3].type != "audio/mp4")){
            thefile8 = theplaylist45[7].sources[3].file
        }        
        }

        if (theplaylist45[8] != undefined) {
            theimage9 = theplaylist45[8].images[1].src                                            
        if ((theplaylist45[8].sources[1] != undefined) && (theplaylist45[8].sources[1].type != "audio/mp4")){
            thefile9 = theplaylist45[8].sources[1].file            
        }        
        if ((theplaylist45[8].sources[2] != undefined) && (theplaylist45[8].sources[2].type != "audio/mp4")){
            thefile9 = theplaylist45[8].sources[2].file
        }
        if ((theplaylist45[8].sources[3] != undefined) && (theplaylist45[8].sources[3].type != "audio/mp4")){
            thefile9 = theplaylist45[8].sources[3].file
        }        
        }


        if (theplaylist45[9] != undefined) {
            theimage10 = theplaylist45[9].images[1].src                                            
        if ((theplaylist45[9].sources[1] != undefined) && (theplaylist45[9].sources[1].type != "audio/mp4")){
            thefile10 = theplaylist45[9].sources[1].file            
        }        
        if ((theplaylist45[9].sources[2] != undefined) && (theplaylist45[9].sources[2].type != "audio/mp4")){
            thefile10 = theplaylist45[9].sources[2].file
        }
        if ((theplaylist45[9].sources[3] != undefined) && (theplaylist45[9].sources[3].type != "audio/mp4")){
            thefile10 = theplaylist45[9].sources[3].file
        }        
        }



        if (theplaylist45[10] != undefined) {
            theimage11 = theplaylist45[10].images[1].src                                            
        if ((theplaylist45[10].sources[1] != undefined) && (theplaylist45[10].sources[1].type != "audio/mp4")){
            thefile11 = theplaylist45[10].sources[1].file            
        }        
        if ((theplaylist45[10].sources[2] != undefined) && (theplaylist45[10].sources[2].type != "audio/mp4")){
            thefile11 = theplaylist45[10].sources[2].file
        }
        if ((theplaylist45[10].sources[3] != undefined) && (theplaylist45[10].sources[3].type != "audio/mp4")){
            thefile11 = theplaylist45[10].sources[3].file
        }        
        }


        if (theplaylist45[11] != undefined) {
            theimage12 = theplaylist45[11].images[1].src                                            
        if ((theplaylist45[11].sources[1] != undefined) && (theplaylist45[11].sources[1].type != "audio/mp4")){
            thefile12 = theplaylist45[11].sources[1].file            
        }        
        if ((theplaylist45[11].sources[2] != undefined) && (theplaylist45[11].sources[2].type != "audio/mp4")){
            thefile12 = theplaylist45[11].sources[2].file
        }
        if ((theplaylist45[11].sources[3] != undefined) && (theplaylist45[11].sources[3].type != "audio/mp4")){
            thefile12 = theplaylist45[11].sources[3].file
        }        
        }

        if (theplaylist45[12] != undefined) {
            theimage13 = theplaylist45[12].images[1].src                                            
        if ((theplaylist45[12].sources[1] != undefined) && (theplaylist45[12].sources[1].type != "audio/mp4")){
            thefile13 = theplaylist45[12].sources[1].file            
        }        
        if ((theplaylist45[12].sources[2] != undefined) && (theplaylist45[12].sources[2].type != "audio/mp4")){
            thefile13 = theplaylist45[12].sources[2].file
        }
        if ((theplaylist45[12].sources[3] != undefined) && (theplaylist45[12].sources[3].type != "audio/mp4")){
            thefile13 = theplaylist45[12].sources[3].file
        }        
        }


        if (theplaylist45[13] != undefined) {
            theimage14 = theplaylist45[13].images[1].src                                            
        if ((theplaylist45[13].sources[1] != undefined) && (theplaylist45[13].sources[1].type != "audio/mp4")){
            thefile14 = theplaylist45[13].sources[1].file            
        }        
        if ((theplaylist45[13].sources[2] != undefined) && (theplaylist45[13].sources[2].type != "audio/mp4")){
            thefile14 = theplaylist45[13].sources[2].file
        }
        if ((theplaylist45[13].sources[3] != undefined) && (theplaylist45[13].sources[3].type != "audio/mp4")){
            thefile14 = theplaylist45[13].sources[3].file
        }        
        }


        if (theplaylist45[14] != undefined) {
            theimage15 = theplaylist45[14].images[1].src                                            
        if ((theplaylist45[14].sources[1] != undefined) && (theplaylist45[14].sources[1].type != "audio/mp4")){
            thefile15 = theplaylist45[14].sources[1].file            
        }        
        if ((theplaylist45[14].sources[2] != undefined) && (theplaylist45[14].sources[2].type != "audio/mp4")){
            thefile15 = theplaylist45[14].sources[2].file
        }
        if ((theplaylist45[14].sources[3] != undefined) && (theplaylist45[14].sources[3].type != "audio/mp4")){
            thefile15 = theplaylist45[14].sources[3].file
        }        
        }









playerInstance.setup({
  "playlist": [{
        "file": thefile1,
        "image": theimage1,        
  },{
        "file": thefile2,
        "image": theimage2,
  },{
        "file": thefile3,
        "image": theimage3,        
  },{
        "file": thefile4,
        "image": theimage4,        
  },{
        "file": thefile5,
        "image": theimage5,        
  },{
        "file": thefile6,
        "image": theimage6,        
  },{
        "file": thefile7,
        "image": theimage7,        
  },{
        "file": thefile8,
        "image": theimage8,        
  },{
        "file": thefile9,
        "image": theimage9,        
  },{
        "file": thefile10,
        "image": theimage10,        
  },{
        "file": thefile11,
        "image": theimage11,        
  },{
        "file": thefile12,
        "image": theimage12,        
  },{
        "file": thefile13,
        "image": theimage13,        
  },{
        "file": thefile14,
        "image": theimage14,        
  },{
        "file": thefile15,
        "image": theimage15,        
  }
  ],
  "width": "100%",
   "height": "100%",
  "autostart": true,
  "androidhls": true,
  "mute": false,
  "displaydescription": false,
  "nextUpDisplay": false,  
  "cast": {},  
"skin": {
  "name": "myskin2"
  },  
  "volume": 100,
  "primary": "html5",
  "controls": true,
    'advertising': {
    'client': 'vast',
    'admessage': ' ',
    'schedule': {
      'adbreak1': {
        'offset': "post",
        "tag": "https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411"
    }    
}
}  
});



playerInstance.on('beforeComplete', function() {

playerInstance.setControls(false)
})

playerInstance.on('adComplete', function() {

playerInstance.setControls(true)

})


var adnumber = 0;

var makead1 = function() {
     adnumber = 6;
    console.log('makead1')
}

var makead2 = function() {
     adnumber = 13;
    console.log('makead2')
}

var makead3 = function() {
     adnumber = 20;
    console.log('makead3')
}
var makead4 = function() {
     adnumber = 27;
    console.log('makead4')
}
var makead5 = function() {
     adnumber = 34;
    console.log('makead5')
}
var makead6 = function() {
     adnumber = 41;
    console.log('makead6')
}
var makead7 = function() {
     adnumber = 48;
    console.log('makead7')
}
var makead8 = function() {
     adnumber = 55;
    console.log('makead8')
}
var makead9 = function() {
     adnumber = 62;
    console.log('makead9')
}
var makead10 = function() {
     adnumber = 69;
    console.log('makead10')
}
var makead11 = function() {
     adnumber = 76;
    console.log('makead11')
}
var makead12 = function() {
     adnumber = 83;
    console.log('makead12')
}
var makead13 = function() {
     adnumber = 90;
    console.log('makead13')
}
var makead14 = function() {
     adnumber = 97;
    console.log('makead14')
}


// playerInstance.on('adComplete', function() {

//     if ( adnumber < 5) {
//         console.log('playad1')
//         console.log(adnumber);
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }

//     if (( adnumber > 7) && (( adnumber < 12))) {
//         console.log('playad2')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }


//    if (( adnumber > 14) && (( adnumber < 19))) {
//         console.log('playad3')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }

//    if (( adnumber > 21) && (( adnumber < 26))) {
//         console.log('playad4')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }

//    if (( adnumber > 28) && (( adnumber < 33))) {
//         console.log('playad5')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }

//    if (( adnumber > 35) && (( adnumber < 40))) {
//         console.log('playad6')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 42) && (( adnumber < 47))) {
//         console.log('playad7')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }

//    if (( adnumber > 49) && (( adnumber < 54))) {
//         console.log('playad8')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 56) && (( adnumber < 61))) {
//         console.log('playad9')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 63) && (( adnumber < 68))) {
//         console.log('playad10')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 70) && (( adnumber < 75))) {
//         console.log('playad11')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 77) && (( adnumber < 82))) {
//         console.log('playad12')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 84) && (( adnumber < 89))) {
//         console.log('playad13')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }
//    if (( adnumber > 91) && (( adnumber < 96))) {
//         console.log('playad14')
//         console.log(adnumber);        
//         playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
//     }

//     adnumber = adnumber + 1;

//     if (adnumber == 5) {
//         makead1()
//     }
//     if (adnumber == 12) {
//         makead2()
//     }    
//     if (adnumber == 19) {
//         makead3()
//     }
//     if (adnumber == 26) {
//         makead4()
//     }
//     if (adnumber == 33) {
//         makead5()
//     }                 
//     if (adnumber == 40) {
//         makead6()
//     }  
//     if (adnumber == 47) {
//         makead7()
//     } 
//     if (adnumber == 54) {
//         makead8()
//     } 
//     if (adnumber == 61) {
//         makead9()
//     } 
//     if (adnumber == 68) {
//         makead10()
//     } 
//     if (adnumber == 75) {
//         makead11()
//     } 
//     if (adnumber == 82) {
//         makead12()
//     } 
//     if (adnumber == 89) {
//         makead13()
//     }     
//     if (adnumber == 96) {
//         makead14()
//     }     
// })


playerInstance.on('adPause', function() {
    playerInstance.pauseAd();    
    playerInstance.play();    

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








// document.addEventListener("pause", function() {
//     playerInstance.stop();
//     playerInstance.remove()   
//   $( "#myElement6541" ).remove();  
// }, false);



// document.addEventListener("resume", function() {
// callingvid();
// }, false);            

























}]);



