angular.module('MainApp', ['ui.bootstrap','Qtable'])
.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.homeData = [ 'd1', 'd2', 'd3', 'd4' ];
}])

