(function (mod) {

    mod.service("rgbToHsv", rgbToHsvService);

    function rgbToHsvService() {

        return {
            convert: convert
        };

        /**
         * Converts RGB values to HSV
         * @param {number} r - Red value
         * @param {number} g - Green value
         * @param {number} b = Blue value
         * @returns {{h: number, s: number, v: number}}
         */

        function convert(r, g, b) {

            var computedV = 0;

            //remove spaces from input RGB values, convert to int
            if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
                return {h: 0, s: 0, v: 0};
            }

            r = r / 255;
            g = g / 255;
            b = b / 255;
            var minRGB = Math.min(r, Math.min(g, b));
            var maxRGB = Math.max(r, Math.max(g, b));

            // Black-gray-white
            if (minRGB == maxRGB) {
                computedV = minRGB;
                return {h: 0, s: 0, v: computedV};
            }

            // Colors other than black-gray-white:
            var d = (r == minRGB) ? g - b : ((b == minRGB) ? r - g : b - r);
            var h = (r == minRGB) ? 3 : ((b == minRGB) ? 1 : 5);
            var computedH = 60 * (h - d / (maxRGB - minRGB));
            var computedS = (maxRGB - minRGB) / maxRGB;
            computedV = maxRGB;
            return {h: computedH, s: computedS, v: computedV};
        }

    }
})(angular.module("main"));
