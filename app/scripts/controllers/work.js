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
  	var work = this;
  	var randomNum, result;
  work.myChangeListener = function(sliderId) {
	switch(sliderId) {
		case 'sliderA':
			valueChange(work[sliderId].value);
			work.sliderB.value = randomNum;
			work.sliderC.value = result - randomNum;
			$scope.data = [work.sliderA.value, work.sliderB.value, work.sliderC.value];
			break;
		case 'sliderB':
			valueChange(work[sliderId].value);
			work.sliderA.value = randomNum;
			work.sliderC.value = result - randomNum;
			$scope.data = [work.sliderA.value, work.sliderB.value, work.sliderC.value];
			break;
		case 'sliderC':
			valueChange(work[sliderId].value);
			work.sliderB.value = randomNum;
			work.sliderA.value = result - randomNum;
			$scope.data = [work.sliderA.value, work.sliderB.value, work.sliderC.value];
			break;
	}
  };
  	work.sliderA = {
	    value: 30,
	    options: {
	      floor: 0,
	      ceil: 100,
	      id: 'sliderA',
	      onChange: work.myChangeListener
	    }
	};
	work.sliderB = {
	    value: 50,
	    options: {
	      floor: 0,
	      ceil: 100,
	      id: 'sliderB',
	      onChange: work.myChangeListener
	    }
	};
	work.sliderC = {
	    value: 30,
	    options: {
	      floor: 0,
	      ceil: 100,
	      id: 'sliderC',
	      onChange: work.myChangeListener
	    }
	};  
 	$scope.labels = ['slider 1', 'slider 2', 'slider 3'];
 	function valueChange(value){
 		result = (100 - value)
    	randomNum = (result == 0) ? 0 : Math.floor(Math.random() * result) + 1; 
 	}
});
