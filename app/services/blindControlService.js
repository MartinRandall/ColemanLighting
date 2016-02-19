(function(mod) {

    "use strict";

    mod.factory("blindControlService", blindControlService);

    blindControlService.$inject = ['$http', 'serverUrl'];

    function blindControlService($http, serverUrl) {

        return {

            stop: function() {
                console.log('stopping blind motion');
                $http.get(serverUrl + 'data_request?id=lu_action&action=Stop&serviceId=urn:upnp-org:serviceId:WindowCovering1&DeviceNum=72');
            },

            up: function () {
                console.log('opening blinds');
                $http.get(serverUrl + 'data_request?id=lu_action&action=Up&serviceId=urn:upnp-org:serviceId:WindowCovering1&DeviceNum=72');
            },

            down: function() {
                console.log('closing blinds');
                $http.get(serverUrl  + 'data_request?id=lu_action&action=Down&serviceId=urn:upnp-org:serviceId:WindowCovering1&DeviceNum=72');
            }
        }
    }

})(angular.module("main"));