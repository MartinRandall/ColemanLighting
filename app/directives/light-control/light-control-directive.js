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
            link: function (scope, elem) {
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

                elem.on('$destroy', function() {
                    if (discoTimer) {
                        $interval.cancel(discoTimer);
                    }
                });

                var discoTimer;
                function setDisco(discoOn) {
                    console.log("Disco: " + discoOn);


                    if (discoOn) {
                        discoTimer = $interval(function() {
                            scope.light.levels.red = 255 - scope.light.levels.green;
                            scope.light.levels.green = 255 - scope.light.levels.blue;
                            scope.light.levels.blue = 255 - scope.light.levels.red;
                        }, 3000);
                    } else {
                        if (discoTimer) {
                            $interval.cancel(discoTimer);
                            discoOn = 0;
                        }
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