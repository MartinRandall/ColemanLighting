(function (mod) {

    "use strict";

    mod.directive("blindControl", blindControl);

    blindControl.$inject = ['blindControlService'];

    function blindControl(blindControlService) {
        return {
            restrict: "E",
            templateUrl: 'app/directives/blind-control/blind-control-template.html',
            link: link
        };

        function link(scope){

            scope.up = function() {
                blindControlService.up();
            };

            scope.down = function() {
                blindControlService.down();
            };

            scope.stop = function() {
                blindControlService.stop();
            };
        }
    }

})(angular.module("main"));