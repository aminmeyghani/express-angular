angular.module('Mod1', [])
.controller('Mod1Ctrl', ['$scope', function($scope) {
  $scope.mod1Data = "mod1 data";

}])

 .directive('modOneDirective', [function () {
   return {
    scope: {},
     restrict: 'EAC',
     transclude: true,
     template:'<div class="btn-group" ng-transclude></div>',
     link:function(scope, element, attrs) {
      	console.log("hello world from directive from mod1");
    }
   };
 }])