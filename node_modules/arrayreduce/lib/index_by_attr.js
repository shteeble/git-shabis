/**
 * Create index by attr value.
 * @function indexByAttr
 * @param {string} attrKey - Key of attr.
 * @returns {function} - Index object.
 * @example
 * let index = [ {id:1}, {id:2}].reduce(indexByAttr('id'), {})
 */
"use strict";

/** @lends indexByAttr */
function indexByAttr(attrKey) {
    if (arguments.length > 1) {
        throw new Error('[indexByAttr] Invalid args.');
    }
    return function reduce(index, entry) {
        if (entry.hasOwnProperty(attrKey)) {
            let attrValue = entry[attrKey];
            index[attrValue] = entry;
        } else {
            console.warn(`${attrKey} not found in ${JSON.stringify(entry)}`);
        }
        return index;
    }
}

module.exports = indexByAttr;