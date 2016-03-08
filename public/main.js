'use strict';

var app = angular.module('myApp', [])


app.controller('mainCtrl', function($scope, $http){
  $scope.contacts = [];  //array of contacts

  getContacts();

  $scope.addContact = function(){
    var contact = angular.copy($scope.newContact)
    $scope.contacts.push(contact);
    $scope.newContact = {} //clears out all the inputs



    $http.post('/contacts/addContact', $scope.contacts)
    .then(function(res){
      $scope.contacts = res.data
    }, function(err) {
      console.error(err);
    });
  }


  function getContacts(){
    $http.get('/contacts')
    .then(function(res){
      $scope.contacts = res.data

    }, function(err){
      console.error(err);
    });
    
  }

  $scope.updateContact = function(index){
      console.log(index);
  }

  $scope.deleteContact = function(index){
    console.log(index)
    $scope.contacts.splice(index, 1);
    $http.delete(`/contacts/delete/{index}`)
    .then(function(res){

    }, function(err){
      console.error(err);
    });
  }
});





