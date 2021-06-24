var myApp = angular.module('myApp', ['ionic', 
  'theApp1',
  'theApp4',
  'theApp5',                                                                                              
  'theApp6',
  'theApp7',
  'theApp8',
  'theApp9',
  'theApp10',
  'theApp11',
  'theApp12',
  'theApp13',
  'theApp14'                                                                                                           
]);

myApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        function onDeviceReady() { 
            navigator.splashscreen.hide()
        }
        document.addEventListener("deviceready", onDeviceReady, false);
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(false);
        }
        if(window.StatusBar) {
            StatusBar.hide()
        }
    });
})

myApp.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');
    $stateProvider
      .state('noticias', {
        cache: false,
        url: '/noticias',
        controller: 'noticiasCtrl',
        templateUrl: 'partials/noticias.html'
      }) 
      .state('opinion', {
        cache: false,
        url: '/opinion',
        controller: 'opinionCtrl',
        templateUrl: 'partials/opinion.html'
      })  
      .state('videos', {
        cache: false,
        url: '/videos',
        controller: 'videosCtrl',
        templateUrl: 'partials/videos.html'
      })                 
      .state('programas', {
        cache: false,
        url: '/programas',
        controller: 'programasCtrl',
        templateUrl: 'partials/programas.html'
      }) 
      .state('plataforma', {
        cache: false,
        url: '/plataforma',
        controller: 'plataformaCtrl',
        templateUrl: 'partials/plataforma.html'
      }) 
      .state('informa', {
        cache: false,
        url: '/informa',
        controller: 'informaCtrl',
        templateUrl: 'partials/informa.html'
      })  
      .state('encuentro', {
        cache: false,
        url: '/encuentro',
        controller: 'encuentroCtrl',
        templateUrl: 'partials/encuentro.html'
      })   
      .state('consultorio', {
        cache: false,
        url: '/consultorio',
        controller: 'consultorioCtrl',
        templateUrl: 'partials/consultorio.html'
      }) 
      .state('remind', {
        cache: false,
        url: '/remind',
        controller: 'remindCtrl',
        templateUrl: 'partials/remind.html'
      }) 
      .state('pop', {
        cache: false,
        url: '/pop',
        controller: 'popCtrl',
        templateUrl: 'partials/pop.html'
      })  
      .state('geo', {
        cache: false,
        url: '/geo',
        controller: 'geoCtrl',
        templateUrl: 'partials/geo.html'
      })                                                            
      .state('/player12/:id/:i', {
        cache: false,
        url: '/player12/:id/:i',
        templateUrl: 'partials/player12.html',
        controller: 'player12Ctrl'
      })             
    $urlRouterProvider.otherwise('/noticias');
});














  