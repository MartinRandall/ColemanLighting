(function(mod) {

    mod.value("roofLight", getLight('Roof Light', 0, 0, 255, 0, 255, 12, 11, 13, 14, 10));
    mod.value("worktopLight", getLight('Worktop Light', 0, 128, 0, 0, 255, 7, 6, 8, 9, 5));

    /**
     * Create a new light
     * @param {string} name - Name of light
     * @param {number} r - Initial red value
     * @param {number} g - Initial green value
     * @param {number} b - Initial blue value
     * @param {number} w - Initial white value
     * @param {number} m - Initial master value
     * @param {number} idr - Red device Id
     * @param {number} idg - Green device Id
     * @param {number} idb - Blue device Id
     * @param {number} idw - While device Id
     * @param {number} idm - Master device Id
     * @returns {{name: *, deviceIds: {red: *, green: *, blue: *, white: *, master: *}, levels: {red: *, green: *, blue: *, white: *, master: *}}}
     */
    function getLight(name, r, g, b, w, m, idr, idg, idb, idw, idm) {
        return {
            name: name,
            deviceIds: {
                red: idr,
                green: idg,
                blue: idb,
                white: idw,
                master: idm
            },
            levels: {
                red: r,
                green: g,
                blue: b,
                white: w,
                master: m
            }
        };
    }

})(angular.module('main'));
