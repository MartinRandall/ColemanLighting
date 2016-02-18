(function(mod) {

    "use strict";

    mod.factory("blindControlService", blindControlService);

    blindControlService.$inject = ['$http'];

    function blindControlService($http) {

        return {

            stop: function() {
                console.log('stopping blind motion');
                $http.get('http://192.168.1.18/port_3480/data_request?id=lu_action&action=Stop&serviceId=urn:upnp-org:serviceId:WindowCovering1&DeviceNum=72');
            },

            up: function () {
                console.log('opening blinds');
                $http.get('http://192.168.1.18/port_3480/data_request?id=lu_action&action=Up&serviceId=urn:upnp-org:serviceId:WindowCovering1&DeviceNum=72');
            },

            down: function() {
                console.log('closing blinds');
                $http.get('http://192.168.1.18/port_3480/data_request?id=lu_action&action=Down&serviceId=urn:upnp-org:serviceId:WindowCovering1&DeviceNum=72');
            }
        }
    }

})(angular.module("main"));