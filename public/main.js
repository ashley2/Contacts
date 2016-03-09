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
  $scope.editIndex = null
  $scope.updateContact = function(index){
   $scope.editIndex = index
 }

 $scope.enterInfo = function(){
  $scope.contacts[$scope.editIndex] =  $scope.editContact

  $http.put('/contacts/update/', $scope.contacts)
  .then(function(res){
    $scope.contacts = res.data

  }, function(err){
    console.error(err);
  });  
}

$scope.deleteContact = function(index){

  // swal({   title: "Are you sure?",   
  //   text: "You will not be able to recover this contact!",
  //   type: "warning",
  //   showCancelButton: true, 
  //   confirmButtonColor: "#DD6B55", 
  //   confirmButtonText: "Yes, delete it!",
  //   closeOnConfirm: false },
  //   function(){   
  //     swal("Deleted!",
  //      "Your contact has been deleted.",
  //     "success"); });

       $scope.contacts.splice(index, 1);
       $http.delete(`/contacts/delete/{index}`)
       .then(function(res){

       }, function(err){
        console.error(err);
      });
     }
   });




