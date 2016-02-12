(function () {

    "use strict";

    angular.module("main", ['ngRoute'])
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
