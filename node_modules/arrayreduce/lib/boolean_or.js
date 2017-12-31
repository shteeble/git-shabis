/**
 * And condition for booleans.
 * @memberof module:arrayreduce/lib
 * @function booleanOr
 * @returns {function} - And function.
 */
"use strict";

/** @lends booleanOr */
function booleanOr() {
    if (arguments.length > 1) {
        throw new Error('[booleanOr] Invalid args.');
    }
    return function reduce(a, b) {
        return !!a || !!b;
    }
}

module.exports = booleanOr;
