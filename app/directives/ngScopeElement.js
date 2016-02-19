(function(mod) {

    "use strict";

    mod.directive('ngScopeElement', function() {
        return {
            restrict: 'A',
            compile: function compile() {
                return {
                    pre: function preLink(scope, element, attrs) {
                        scope[attrs.ngScopeElement] = element;
                    }
                }
            }
        }
    })

})(angular.module('main'));