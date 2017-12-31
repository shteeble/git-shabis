/**
 * Convert string into crammed case.
 * Join string into one.
 * @memberof module:stringcase/lib
 * @function cramcase
 * @param {string} str - String to convert.
 * @returns {string} Enum cased string.
 */

'use strict'

const snakecase = require('./snakecase')

/** @lends cramcase */
function cramcase (str) {
  return snakecase(str).replace(/_/g, '')
}

module.exports = cramcase
