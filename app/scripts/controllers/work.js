'use strict';

/**
 * @ngdoc function
 * @name sampleTestApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the sampleTestApp
 */
angular.module('sampleTestApp')
  .controller('WorkCtrl', function ($scope) {
    $scope.numberSlider = {
		options: {
	        floor: 0,
	        ceil: 100
	    }
	};
	// default values
    $scope.val1 = 30;
    $scope.val2 = 50;
    $scope.val3 = 20; 
    $scope.slider1Active = false;
    $scope.slider2Active = false;
    $scope.slider3Active = false; 
    var randomNum, result;
    $scope.$watch('val1',function(newVal, oldval){
    	
    	if(newVal !== oldval) {
	    	valueChange(newVal);
	    	$scope.val2 = randomNum;
	    	$scope.val3 = result - randomNum;
		}
		$scope.data = [$scope.val1, $scope.val2, $scope.val3];
    }, true); 
    $scope.$watch('val2',function(newVal,oldval){
    	// if(newVal !== oldval) {
	    // 	valueChange(newVal);
	    // 	$scope.val1 = randomNum;
	    // 	$scope.val3 = result - randomNum;
	    // }
    	$scope.data = [$scope.val1, $scope.val2, $scope.val3];
    }, true); 
    $scope.$watch('val3',function(newVal,oldval){
    	// if(newVal !== oldval) {
	    // 	valueChange(newVal);
	    // 	$scope.val1 = randomNum;
	    // 	$scope.val2 = result - randomNum;
	    // }
    	$scope.data = [$scope.val1, $scope.val2, $scope.val3];
    }, true); 
    

 	$scope.labels = ['slider 1', 'slider 2', 'slider 3'];
 	function valueChange(value){
 		result = (100 - value)
    	randomNum = (result == 0) ? 0 : Math.floor(Math.random() * result) + 1; 
 	}
});
