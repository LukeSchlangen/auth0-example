console.log('sourcing client.js is good!')

var myApp = angular.module('myApp', []);

myApp.controller('authController', ['$scope', '$http', function($scope, $http){
  console.log('authController at the ready!');
  $scope.content = "Here is some content from our controller!";
  $scope.showThings = true;
}]);
