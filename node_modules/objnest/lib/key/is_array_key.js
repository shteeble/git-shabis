/**
 * Detect is an array key.
 * @memberof module:objnest/lib/key
 * @function isArrayKey
 * @param {string} key - Key to convert.
 * @returns {boolean} - Is array key or not.
 */
'use strict'

/** @lends isArrayKey */
function isArrayKey (key) {
  return /\[\d\]$/.test(key)
}

module.exports = isArrayKey;
