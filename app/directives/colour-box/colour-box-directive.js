(function (mod) {

    "use strict";

    mod.directive("colourBox", colourBox);

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
            link: function (scope) {
                scope.$watchGroup(['red', 'green', 'blue'], function (newValues) {
                    scope.bgcolor = "#" + ("000000" + rgbToHex(newValues[0], newValues[1], newValues[2])).slice(-6);
                });
            }
        };
    }

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
})(angular.module("main"));