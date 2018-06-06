'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.data = {
      fname:"Abnish",
      lname:"Sharma"
    }
  }])
  .controller('MyCustomerCtrl',['$scope',function($scope) {
    $scope.customer ={
      name: "Abnish",
      address:"Noida"
    }
  }])
  
