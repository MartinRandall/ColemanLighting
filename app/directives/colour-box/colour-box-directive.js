(function () {

    "use strict";

    angular.module("main")
        .directive("colourBox", function () {
            return {
                restrict: "E",
                templateUrl: "app/directives/colour-box/colour-box-template.html",
                scope: {
                    light: '='
                },
                link: function (scope, element, attr) {

                }
            };
        });
})();