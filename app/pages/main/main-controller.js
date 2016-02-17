(function () {

    "use strict";

    angular.module("main")
        .controller("MainController", mainController);

    mainController.$inject = ['$scope', 'lightControlService'];

    function mainController($scope, lightControlService) {

        $scope.roofLight = getRoofLight();
        $scope.worktopLight = getWorktopLight();

        setLightLevels($scope.roofLight);
        setLightLevels($scope.worktopLight);

        /**
         * Sets the light levels of the given light
         * @param {{name: string, deviceIds: {red: number, green: number, blue: number, white: number, master: number}, levels: {red: number, green: number, blue: number, white: number}}} light
         */
        function setLightLevels(light) {
            lightControlService.setLight(light.deviceIds.blue, (light.levels.blue * 100) / 255);
            lightControlService.setLight(light.deviceIds.green, (light.levels.green * 100) / 255);
            lightControlService.setLight(light.deviceIds.red, (light.levels.red * 100) / 255);
            lightControlService.setLight(light.deviceIds.white, (light.levels.white * 100) / 255);
            lightControlService.setLight(light.deviceIds.master, (light.levels.master * 100) / 255);
        }
    }


    /**
     * Constructs the roof light object
     * @returns {{name: string, deviceIds: {red: number, green: number, blue: number, white: number, master: number}, levels: {red: number, green: number, blue: number, white: number, master: number}}}
     */
    function getRoofLight() {
        return {
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
                white: 255,
                master: 255
            }
        }
    }

    /**
     * Constructs the worktop light object
     * @returns {{name: string, deviceIds: {red: number, green: number, blue: number, white: number, master: number}, levels: {red: number, green: number, blue: number, white: number, master: number}}}
     */
    function getWorktopLight() {
        return {
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
                white: 255,
                master: 255
            }
        };
    }
})();
