'use strict';

var app = angular.module('myApp', [])

app.controller('mainCtrl', function($scope, $http){
  $scope.contacts = [];  //array of contacts


  $scope.addContact = function(){
    var contact = angular.copy($scope.newContact)
    $scope.contacts.push(contact);
    $scope.newContact = {} //clears out all the inputs

    // var obj = { $scope.contacts.name, $scope.contact.phoneNum, $scope.contact.email }

    $http.post('/contacts/addContact', $scope.contacts )
    .then(function(res){
     
      console.log($scope.contacts)
    }, function(err) {
      console.error(err);
    });
  }
  $scope.deleteContact = function(contact){
    // var index = $scope.todos.indexOf(this.todo);
    $scope.contacts.splice(this.$index, 1);  //scope.contacts is the array of contacts **going to need to send this to the backend
  }

  // $scope.getWeather = function(){

  //   $http({
  //     // method: 'GET',
  //     url: 'http://api.wunderground.com/api/e6d3f29c973c077d/conditions/q/CA/San_Francisco.json'
  //   })
  //   .then(function(res){
  //     console.log('res', res)
  //   }, function(err) {
  //     console.error(err);
  //   });

  // }
});





