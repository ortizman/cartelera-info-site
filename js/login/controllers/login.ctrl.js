angular.module('myapp.login')
.controller('LoginCtrl', function($scope, $state){

  $scope.login = function(){
    console.log("Usuario: " + $scope.username);
    console.log("Password: " + $scope.password);
    $state.go("cartelera");
  }
});
