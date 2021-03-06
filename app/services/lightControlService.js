(function (mod) {

    "use strict";

    mod.factory("lightControlService", lightControlService);

    lightControlService.$inject = ['$http', 'serverUrl'];

    function lightControlService($http, serverUrl) {

        return {

            /**
             * Sets the level for the given light
             * @param {number} lightId - Id of light to set
             * @param {number} level - level of light to set at (0 - 100)
             */
            setLight: function (lightId, level) {
                level = limitLevel(level);

                // send http command
               $http.get(serverUrl +
                    "data_request?id=lu_action&output_format=json&" +
                    "DeviceNum=" + lightId + "&serviceId=urn:upnp-org:serviceId:Dimming1&" +
                    "action=SetLoadLevelTarget&newLoadlevelTarget=" + level);

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
})(angular.module("main"));
