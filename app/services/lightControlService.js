(function () {

    "use strict";

    angular.module("main")
        .factory("lightControlService", lightControlService);

    lightControlService.$inject = ['$http'];

    function lightControlService($http) {

        return {

            /**
             * Sets the level for the given light
             * @param {number} lightId - Id of light to set
             * @param {number} level - level of light to set at (0 - 100)
             */
            setLight: function (lightId, level) {
                level = limitLevel(level);

                // todo - send http command

                console.log("set light " + lightId + " to " + level);
            }
        };
    }

    /**
     * Limit the level value to range 0 - 100
     * @param {number} level
     * @returns {number} limited level
     */
    function limitLevel(level) {
        if (level < 0) {
            level = 0;
        }
        else if (level > 100) {
            level = 100;
        }
        return level;
    }
})();
