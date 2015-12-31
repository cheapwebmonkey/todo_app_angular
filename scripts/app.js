//first param is name of the app
angular.module("todoListApp", [])

  .controller('mainCtrl', function($scope) {
  $scope.helloWorld = function(){
    console.log("Hello there");
  };
})
  .controller('coolCtrl', function($scope){
    $scope.whoAmI = function() {
      console.log("Hey this is the coolCtrl function");
  };
  $scope.helloWorld = function() {
    console.log("This is the Hello World inside the coolCtrl, not main ctrl!");
  }
})
  .controller('siblingCtrl', function($scope) {
    $scope.foobar = 1234;
});
