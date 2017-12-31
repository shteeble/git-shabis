/**
 * Convert string into pascal case.
 * @memberof module:stringcase/lib
 * @function pascalcase
 * @param {string} str - String to convert.
 * @returns {string} Pascal case string.
 */

'use strict'

const camelcase = require('./camelcase')
const capitalcase = require('./capitalcase')

/** @lends pascalcase */
function pascalcase (str) {
  return capitalcase(camelcase(str))
}

module.exports = pascalcase