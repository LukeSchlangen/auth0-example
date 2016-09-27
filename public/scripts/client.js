console.log('sourcing client.js is good!')

var myApp = angular.module('myApp', []);
var lock = new Auth0Lock( '10mqdLAK2yESHwgKh4y72DAXEv3TeV1M', 'lukeschlangen.auth0.com');
// log out url, from Auth0
var logOutUrl = 'https://lukeschlangen.auth0.com/v2/logout';

myApp.controller('authController', ['$scope', '$http', function($scope, $http){
  console.log('authController at the ready!');
  $scope.content = "Here is some content from our controller!";
  $scope.showThings = true;
  $scope.logIn = function(){
    console.log('in logIn function');
    lock.show(function(err, profile, token){
      if(err){
        console.log('error:', err);
      }else{
        console.log('Auth0 success, Profile: ', profile);
      }
    });
  };
}]);
