(function (mod) {

    "use strict";

    mod.directive("colourWheel", colourWheel);


    colourWheel.$inject = [];


    function colourWheel() {
        return {
            restrict: "E",
            templateUrl: "app/directives/colour-wheel/colour-wheel-template.html",
            scope: {
                red: '=',
                green: '=',
                blue: '=',
                size: '='
            },
            link: function (scope, element) {
                var el = drawCircle(element, Number(scope.size));

                scope.$watch('red', function (value) {
                    console.log(value);
                });

                el.addEventListener('click', function (e) {

                    scope.$apply(function () {
                        var colour = getPixelColour(e.layerX, e.layerY, el.width);
                        scope.red = Math.round(colour.r);
                        scope.green = Math.round(colour.g);
                        scope.blue = Math.round(colour.b);
                    });

                }, true);
            }
        };
    }

    /**
     * Convert polar to rectangular coordinates
     * @param {number} angle = angle in degrees
     * @param {number} radius
     * @returns {{x: number, y: number}}
     */
    function polarToRectangular(angle, radius) {
        // degree to radians
        var radians = angle * (Math.PI / 180);
        return {
            x: Math.round(Math.cos(radians) * radius),
            y: Math.round(Math.sin(radians) * radius)
        };
    }

    /**
     * Draws a circle
     * @param element
     * @param {number} size - size of the circle
     * @returns {*}
     */
    function drawCircle(element, size) {

        var canvas = angular.element("<canvas></canvas>");
        element.append(canvas);
        var el = canvas[0];

        var context = el.getContext('2d'),
            width = size,
            height = size,
            cx = width / 2,
            cy = height / 2,
            radius = width / 2,
            imageData,
            pixels,
            hue, sat,
            i = 0,
            x, y, rx, ry, d,
            f, g, u, v, w;

        el.width = width;
        el.height = height;
        imageData = context.createImageData(width, height);
        pixels = imageData.data;

        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++, i += 4) {
                rx = x - cx;
                ry = y - cy;
                d = rx * rx + ry * ry;
                if (d < radius * radius) {
                    hue = 6 * (Math.atan2(ry, rx) + Math.PI) / (2 * Math.PI);
                    sat = Math.sqrt(d) / radius;
                    g = Math.floor(hue);
                    f = hue - g;
                    u = 255 * (1 - sat);
                    v = 255 * (1 - sat * f);
                    w = 255 * (1 - sat * (1 - f));
                    pixels[i] = [255, v, u, u, w, 255, 255][g];
                    pixels[i + 1] = [w, 255, 255, v, u, u, w][g];
                    pixels[i + 2] = [u, u, w, 255, 255, v, u][g];
                    pixels[i + 3] = 255;
                } else {
                    pixels[i] = 255;
                    pixels[i + 1] = 255;
                    pixels[i + 2] = 255;
                    pixels[i + 3] = 255;
                }
            }
        }

        context.putImageData(imageData, 0, 0);

        return el;
    }

    /**
     * Get pixel colour
     * @param {number} x
     * @param {number} y
     * @param {number} size - size of colour wheel
     * @returns {*}
     */
    function getPixelColour(x, y, size) {
        var radius = size / 2;
        var cx = size / 2;
        var cy = size / 2;
        var rx = x - cx;
        var ry = y - cy;
        var d = rx * rx + ry * ry;
        if (d < radius * radius) {
            var hue = 6 * (Math.atan2(ry, rx) + Math.PI) / (2 * Math.PI);
            var sat = Math.sqrt(d) / radius;
            var g = Math.floor(hue);
            var f = hue - g;
            var u = 255 * (1 - sat);
            var v = 255 * (1 - sat * f);
            var w = 255 * (1 - sat * (1 - f));
            return {
                r: [255, v, u, u, w, 255, 255][g],
                g: [w, 255, 255, v, u, u, w][g],
                b: [u, u, w, 255, 255, v, u][g]
            };
        } else {
            return {r: 255, g: 255, b: 255};
        }
    }

})(angular.module("main"));