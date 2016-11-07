'use strict';

angular.module('myapp.cartelera')
.factory('CarteleraService', function($http){

  var getCartelera = function(anio){
    if (anio == 'primero') {
      return $http.get('https://www.mocky.io/v2/581f9f633e00002825c08e9a');
    }
    else if (anio == 'segundo') {
      return $http.get('https://www.mocky.io/v2/581f9f633e00002825c08e9a');
    } else if (anio == 'tercero') {

    } else if (anio == 'cuarto') {

    } else {

    }
  };

  return {
    getCartelera:getCartelera
  };
});
