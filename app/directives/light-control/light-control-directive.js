(function (mod) {

    "use strict";

    mod.directive("lightControl", lightControl);

    lightControl.$inject = ['lightControlService', '$interval'];

    function lightControl(lightControlService, $interval) {
        return {
            restrict: "E",
            templateUrl: "app/directives/light-control/light-control-template.html",
            scope: {
                light: '='
            },
            link: function (scope) {
                scope.discoMode = false;

                scope.$watch('light.levels.red', function (newValue) {
                    lightControlService.setLight(scope.light.deviceIds.red, scaleValue(newValue));
                });
                scope.$watch('light.levels.green', function (newValue) {
                    lightControlService.setLight(scope.light.deviceIds.green, scaleValue(newValue));
                });
                scope.$watch('light.levels.blue', function (newValue) {
                    lightControlService.setLight(scope.light.deviceIds.blue, scaleValue(newValue));
                });
                scope.$watch('light.levels.white', function (newValue) {
                    lightControlService.setLight(scope.light.deviceIds.white, scaleValue(newValue));
                });
                scope.$watch('discoMode', function(newValue) {
                    setDisco(newValue);
                });

                function setDisco(discoOn) {
                    console.log("Disco: " + discoOn);


                    if (discoOn) {
                        $interval(function() {
                            scope.light.levels.red = 255 - scope.light.levels.red;
                        }, 1000);
                    }
                }

            }
        };


    }


    /**
     * Scales a 0-255 value to 0-100
     * @param {number} value - value to scale
     * @returns {number} Scales value in range (0-100)
     */
    function scaleValue(value) {
        return Math.round((value * 100) / 255);
    }


})(angular.module('main'));