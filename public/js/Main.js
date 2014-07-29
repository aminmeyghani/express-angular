function Main($scope){
  $scope.users = [
    {id: 1, name: "Tom", age: "22"},
    {id: 2, name: "Jane", age: "23"},
    {id: 3, name: "Kim", age: "24"}
  ];
  $scope.removeUser = function (u) {
    $scope.users = $scope.users.filter(function(user){
      return user.id !== u.id;
    });
  };
  // $scope.removeUser = function (u,i){
  //   $scope.users.forEach(function(user){
  //     if (u.id === user.id){
  //       $scope.users.splice(i--, 1)
  //     }
  //   });
  // };
}