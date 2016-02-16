(function() {

    "use strict";

    angular.module("main")
        .directive("colourWheel", function() {

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
            }

            return {
                restrict: "E",
                templateUrl: "app/directives/colour-wheel/colour-wheel-template.html",
                scope: {
                    light: '=',
                    size: '='
                },
                link: function(scope, element, attr) {
                    drawCircle(element, scope.size);
                }
            };
        });
})();