/**
 * Convert string into enum case.
 * Join punctuation with slash.
 * @memberof module:stringcase/lib
 * @function enumcase
 * @param {string} str - String to convert.
 * @returns {string} Enum cased string.
 */

'use strict'

const snakecase = require('./snakecase')

/** @lends enumcase */
function enumcase (str) {
  return snakecase(str).replace(/_/g, ':')
}

module.exports = enumcase
