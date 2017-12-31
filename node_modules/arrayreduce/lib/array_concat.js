/**
 * Concat as array.
 * @memberof module:arrayreduce/lib
 * @function arrayConcat
 * @returns {function} - Concat function.
 */

"use strict";

/** @lends arrayConcat */
function arrayConcat() {
    if (arguments.length > 1) {
        throw new Error('[arrayConcat] Invalid args.');
    }
    return function reduce(a, b) {
        return [].concat(a).concat(b);
    }
}

module.exports = arrayConcat;