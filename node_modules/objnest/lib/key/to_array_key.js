/**
 * Convert to array key.
 * @memberof module:objnest/lib/key
 * @function toArrayKey
 * @param {string} key - Key to convert.
 * @returns {string} - Converted key.
 */
'use strict'

/** @lends toArrayKey */
function toArrayKey (key) {
  let components = key.split(/\./g)
  return [
    '[' + components[ 0 ] + ']'
  ].concat(components.slice(1)).join('.')
}

module.exports = toArrayKey;
