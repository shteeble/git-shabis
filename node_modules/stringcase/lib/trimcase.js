/**
 * Convert string into trimmed string.
 * @memberof module:stringcase/lib
 * @function trimcase
 * @param {string} str - String to convert.
 * @returns {string} Trimmed case string.
 */

'use strict'

/** @lends trimcase */
function trimcase (str) {
  return String(str).trim()
}

module.exports = trimcase;