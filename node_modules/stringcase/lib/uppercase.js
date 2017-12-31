/**
 * Convert string into upper case.
 * @memberof module:stringcase/lib
 * @function uppercase
 * @param {string} str - String to convert.
 * @returns {string} Upper case string.
 */

'use strict'

/** @lends uppercase */
function uppercase (str) {
  str = String(str)
  if (!str) {
    return str
  }
  return str.toUpperCase()
}

/**
 * Checks whether the string are uppercase.
 * @memberof module:stringcase/lib
 * @function uppercase.isUppercase
 * @param {string} str - String to check
 * @returns {boolean} - True if the string are uppercase.
 */
uppercase.isUppercase = function (str) {
  return str && !/[a-z]+/.test(str)
}

module.exports = uppercase