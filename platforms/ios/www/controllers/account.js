angular.module('myApp')
  .factory('Account', function($http) {
    return {
          getPrograma: function(prog) {
        return $http.get('http://stormy-escarpment-10471.herokuapp.com/api/elprograma2', {params: {prog}});
      },
      
    };
  });