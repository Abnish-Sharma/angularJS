'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl',['$scope', function ($scope) {
    $scope.data = {
      fname:"Avi",
      lname:"Mishra"
    }
  }]);
