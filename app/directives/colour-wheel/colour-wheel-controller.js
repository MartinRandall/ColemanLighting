(function() {

    "use strict";

    angular.module("main")
        .directive("colourWheel", function() {
            return {
                restrict: "E",
                templateUrl: "app/directives/colour-wheel/colour-wheel-template.html"
            };
        });


})();