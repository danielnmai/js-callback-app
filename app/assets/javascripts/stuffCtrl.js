(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello World!";

    // $scope.task1 = "Wash dishes";
    // $scope.task2 = "Brush cat";
    // $scope.task3 = "Clean fish tank";
    
    $scope.tasks = ["Wash dishes", "Brush cat", "Clean fish tank" ]

    $scope.reviews = ["Ford Mustang EcoBoost is not as good as the GT", "Shopping in Amazon wrecks the malls", "The best mouse for FPS games is hands down the Razer DeathAdder"];

    window.$scope = $scope;

  });

}());