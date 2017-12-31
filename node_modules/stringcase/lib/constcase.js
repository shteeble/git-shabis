/**
 * Convert string into upper snake case.
 * Join punctuation with underscore and convert letters into uppercase.
 * @memberof module:stringcase/lib
 * @function constcase
 * @param {string} str - String to convert.
 * @returns {string} Const cased string.
 */

'use strict'

const uppercase = require('./uppercase')
const snakecase = require('./snakecase')

/** @lends constcase */
function constcase (str) {
  if (constcase.isConstcase(str)) {
    return str
  }
  return uppercase(snakecase(str))
}

/**
 * Checks whether the string are constcase.
 * @memberof module:stringcase/lib
 * @function constcase.isConstcase
 * @param {string} str - String to check.
 * @returns {boolean} - True if the string are constcase.
 */
constcase.isConstcase = function (str) {
  return str && /^[A-Z_]+$/.test(str)
}

module.exports = constcase;
