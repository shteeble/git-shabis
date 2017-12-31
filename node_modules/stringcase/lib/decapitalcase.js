/**
 * Convert string into de-capitalized case.
 * First letters will be lowercase.
 * @memberof module:stringcase/lib
 * @function decapitalcase
 * @param {string} str - String to convert.
 * @returns {string} Capital case string.
 */

'use strict'

const lowercase = require('./lowercase')

/** @lends capitalcase */
function capitalcase (str) {
  str = String(str)
  if (!str) {
    return str
  }
  return lowercase(str[ 0 ]) + str.slice(1)
}

module.exports = capitalcase
