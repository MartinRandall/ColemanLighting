(function (mod) {

    "use strict";

    mod.controller("MainController", mainController);

    mainController.$inject = ['$scope', 'roofLight', 'worktopLight'];

    function mainController($scope, roofLight, worktopLight) {
        $scope.roofLight = roofLight;
        $scope.worktopLight = worktopLight;
    }

})(angular.module("main"));
