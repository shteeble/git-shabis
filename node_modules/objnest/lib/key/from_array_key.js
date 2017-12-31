/**
 * Convert from array key.
 * @memberof module:objnest/lib/key
 * @function fromArrayKey
 * @param {string} key - Key to convert.
 * @returns {string} - Converted key.
 */
'use strict'

/** @lends fromArrayKey */
function fromArrayKey(key) {
    return {
        name: key.replace(/\[\d+\]$/, ''),
        index: Number(key.match(/\[(\d+)\]$/)[1])
    }
}

module.exports = fromArrayKey;
