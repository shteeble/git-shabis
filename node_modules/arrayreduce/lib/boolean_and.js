/**
 * And condition for booleans.
 * @memberof module:arrayreduce/lib
 * @function booleanAnd
 * @returns {function} - And function.
 */
"use strict";

/** @lends booleanAnd */
function booleanAnd() {
    if (arguments.length > 1) {
        throw new Error('[booleanAnd] Invalid args.');
    }
    return function reduce(a, b) {
        return !!a && !!b;
    }
}

module.exports = booleanAnd;
