(function () {

    "use strict";

    angular.module("main")
        .controller("MainController", mainController);

    mainController.$inject = ['$scope'];

    function mainController($scope) {
        $scope.roofLight = getRoofLight(0, 0, 255, 0);
        $scope.worktopLight = getWorktopLight(0, 128, 0, 0);
    }

    /**
     * Constructs the roof light object
     * @param {number} r - Initial red value
     * @param {number} g - Initial green value
     * @param {number} b - Initial blue value
     * @param {number} w - Initial white value
     * @returns {{name: string, deviceIds: {red: number, green: number, blue: number, white: number, master: number}, levels: {red: number, green: number, blue: number, white: number, master: number}}}
     */
    function getRoofLight(r, g, b, w) {
        return getLight('Roof Light', r, g, b, w, 255, 12, 11, 13, 14, 10);
    }

    /**
     * Constructs the worktop light object
     * @param {number} r - Initial red value
     * @param {number} g - Initial green value
     * @param {number} b - Initial blue value
     * @param {number} w - Initial white value
     * @returns {{name: string, deviceIds: {red: number, green: number, blue: number, white: number, master: number}, levels: {red: number, green: number, blue: number, white: number, master: number}}}
     */
    function getWorktopLight(r, g, b, w) {
        return getLight('Worktop Light', r, g, b, w, 255, 7, 6, 8, 9, 5);
    }

    /**
     * Create a new light
     * @param {string} name - Name of light
     * @param {number} r - Initial red value
     * @param {number} g - Initial green value
     * @param {number} b - Initial blue value
     * @param {number} w - Initial white value
     * @param {number} m - Initial master value
     * @param {number} idr - Red device Id
     * @param {number} idg - Green device Id
     * @param {number} idb - Blue device Id
     * @param {number} idw - While device Id
     * @param {number} idm - Master device Id
     * @returns {{name: *, deviceIds: {red: *, green: *, blue: *, white: *, master: *}, levels: {red: *, green: *, blue: *, white: *, master: *}}}
     */
    function getLight(name, r, g, b, w, m, idr, idg, idb, idw, idm) {
        return {
            name: name,
            deviceIds: {
                red: idr,
                green: idg,
                blue: idb,
                white: idw,
                master: idm
            },
            levels: {
                red: r,
                green: g,
                blue: b,
                white: w,
                master: m
            }
        };
    }
})();
