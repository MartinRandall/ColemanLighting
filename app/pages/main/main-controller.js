(function () {

    "use strict";

    angular.module("main")
        .controller("MainController", ["$scope", function ($scope) {
            $scope.test = "angular is working";
        }]);
})();
