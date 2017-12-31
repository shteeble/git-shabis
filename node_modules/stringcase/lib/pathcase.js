/**
 * Convert string into path case.
 * Join punctuation with slash.
 * @memberof module:stringcase/lib
 * @function pathcase
 * @param {string} str - String to convert.
 * @returns {string} Path cased string.
 */

'use strict'

const snakecase = require('./snakecase')

/** @lends pathcase */
function pathcase (str) {
  return snakecase(str).replace(/_/g, '/')
}

module.exports = pathcase;
