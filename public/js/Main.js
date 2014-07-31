angular.module('MainApp', ['ui.bootstrap','Mod1'])
.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.data = "some data2";

}])

.controller('DropdownCtrl', ['$scope', function($scope) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
}])
