angular.module('Qtable', [])
.controller('QtableXCtrl', ['$scope', function($scope) {
  $scope.QtableData1 = "qtable data 1";
}])

 .directive('qtable', [function () {
   return {
    scope: {tableData: '='},
    // restrict: 'EAC',
    transclude: true,
     // template:'<div class="btn-group" ng-transclude></div>',
     templateUrl : "js/Qtable/qtable.htm",
     link:function(scope, element, attrs) {
      	console.log("hello this is the main table.");
    }
   };
 }])

  .directive('qtableSearch', [function () {
   return {
    scope: {searchData: '='},
     // restrict: 'EAC',
     // transclude: true,
     // template:'<div class="btn-group" ng-transclude></div>',
     templateUrl : "js/Qtable/qtable-search.htm",
     link:function(scope, element, attrs) {
        console.log("hello this is the search area.", scope.tableData);
    }
   };
 }])