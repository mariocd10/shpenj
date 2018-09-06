'use strict';

/**
 * @ngdoc function
 * @name shpenjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shpenjApp
 */
angular.module('shpenjApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.gotoTop = function(){
    	//set location.hash to the id of
    	// the element you wish to scroll to.
    	$location.hash('Top');

    	//call $anchorScroll()
    	$anchorScroll();
    };
  });
