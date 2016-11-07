/**
* Modulo principal.
*
* Este modulo depende de todos los modulos con conforman el sistema, y se encarga de inicializarlos
*
*/
angular.module('myapp', [
	'ui.router',
	'myapp.cartelera',
	'LocalStorageModule',
	'wu.masonry'
]);

angular.module('myapp.cartelera', []);
