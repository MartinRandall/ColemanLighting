(function () {

    "use strict";

    angular.module("main")
        .controller("MainController", ["$scope", function ($scope) {
            $scope.test = "angular is working";

            $scope.roofLight = {
                name: 'Roof Light',
                deviceIds: {
                    red: 12,
                    green: 11,
                    blue: 13,
                    white: 14,
                    master: 4
                },
                levels: {
                    red: 255,
                    green: 0,
                    blue: 0,
                    white: 255
                }
            };

            $scope.worktopLight = {
                name: 'Worktop Light',
                deviceIds: {
                    red: 7,
                    green: 6,
                    blue: 8,
                    white: 9,
                    master: 5
                },
                levels: {
                    red: 0,
                    green: 0,
                    blue: 255,
                    white: 255
                }
            };

        }]);
})();
