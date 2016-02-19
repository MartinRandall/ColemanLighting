(function () {

    "use strict";

    angular.module("main", ['ngRoute'])
        .constant('serverUrl', 'http://192.168.1.18/port_3480/')
        .config(["$routeProvider", function ($routeProvider) {

            $routeProvider
                .when("/main", {
                    templateUrl: 'app/pages/main/main.html',
                    controller: 'MainController'
                })
                .otherwise({
                    redirectTo: "/main"
                });
        }]);

})();
