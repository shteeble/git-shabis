/**
 * Convert string into path case.
 * Join punctuation with space.
 * @memberof module:stringcase/lib
 * @function spacecase
 * @param {string} str - String to convert.
 * @returns {string} Path cased string.
 */

'use strict'

const snakecase = require('./snakecase')

/** @lends spacecase */
function spacecase (str) {
  return snakecase(str).replace(/_/g, ' ')
}

module.exports = spacecase;
