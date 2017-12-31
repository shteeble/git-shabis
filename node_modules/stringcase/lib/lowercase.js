/**
 * Convert string into lower case.
 * @memberof module:stringcase/lib
 * @function lowercase
 * @param {string} str - String to convert.
 * @returns {string} Lowercase case string.
 */

'use strict'

/** @lends lowercase */
function lowercase (str) {
  str = String(str)
  if (!str) {
    return str
  }
  return str.toLowerCase()
}

/**
 * Checks whether the string are lowercase.
 * @memberof module:stringcase/lib
 * @function lowercase.isLowercase
 * @param {string} str - String to check
 * @returns {boolean} - True if the string are lowercase.
 */
lowercase.isLowercase = function (str) {
  return str && !/[A-Z]+/.test(str)
}

module.exports = lowercase;