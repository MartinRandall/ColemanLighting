(function () {

    "use strict";

    angular.module("main")
        .controller("MainController", ["$scope", function ($scope) {
            $scope.test = "angular is working";

            $scope.roofLight = {
                name: 'Roof Light',
                deviceIds: {
                    red: 1,
                    green: 2,
                    blue: 3,
                    white: 4
                },
                levels: {
                    red: 255,
                    green: 255,
                    blue: 255,
                    white: 255
                }
            };
            $scope.worktopLight = {
                name: 'Worktop Light',
                deviceIds: {
                    red: 11,
                    green: 12,
                    blue: 13,
                    white: 14
                },
                levels: {
                    red: 255,
                    green: 255,
                    blue: 255,
                    white: 255
                }
            };

        }]);
})();
