(function () {

    "use strict";

    angular.module("main")
        .directive("colourBox", colourBox);

    colourBox.$inject = [];

    function colourBox() {
        return {
            restrict: "E",
            templateUrl: "app/directives/colour-box/colour-box-template.html",
            scope: {
                red: "=",
                green: "=",
                blue: "="
            },
            link: function (scope, element, attr) {
            }
        };
    }
})();