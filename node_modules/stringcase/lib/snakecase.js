/**
 * Convert string into snake case.
 * Join punctuation with underscore.
 * @memberof module:stringcase/lib
 * @function snakecase
 * @param {string} str - String to convert.
 * @returns {string} Snake cased string.
 */

'use strict'

const lowercase = require('./lowercase')
const uppercase = require('./uppercase')

const JOINER = '_';

const replacing = {
  from: /([A-Z])/g,
  to: function ($1) {
    return JOINER + lowercase($1)
  }
}

/** @lends snakecase */
function snakecase (str) {
  if (snakecase.isSnakecase(str)) {
    return str
  }
  str = String(str).replace(/[\-\.\s]/g, JOINER)
  if (!str) {
    return str
  }
  if (uppercase.isUppercase(str)) {
    str = lowercase(str)
  }
  return lowercase(str[ 0 ]) + str.slice(1).replace(replacing.from, replacing.to).replace(/_+/g, '_')
}

/**
 * Checks whether the string are snakecase.
 * @memberof module:stringcase/lib
 * @function snakecase.isSnakecase
 * @param {string} str - String to check.
 * @returns {boolean} - True if the string are snakecase.
 */
snakecase.isSnakecase = function (str) {
  return str && /^[a-z_]+$/.test(str)
}

module.exports = snakecase;
