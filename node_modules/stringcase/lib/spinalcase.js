/**
 * Convert string into spinal case.
 * Join punctuation with hyphen.
 * @memberof module:stringcase/lib
 * @function spinalcase
 * @param {string} str - String to convert.
 * @returns {string} Spinal cased string.
 */

'use strict'

const snakecase = require('./snakecase')

/** @lends spinalcase */
function spinalcase (str) {
  return snakecase(str).replace(/_/g, '-')
}

module.exports = spinalcase;
