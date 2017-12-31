/**
 * Detect is a number or not.
 * @param {*} value - Value to check.
 * @returns {boolean} - Is a number or not.
 * @private
 */

'use strict'

/** @lends _isNumber */
function _isNumber (value) {
  let notNumber = isNaN(Number(value))
  if (notNumber) {
    return false
  }
  return !_isEmptyString(value) && !_isEmptyArray(value)
}

function _isEmptyString (value) {
  return value === ''
}

function _isEmptyArray (value) {
  return Array.isArray(value) && (value.length === 0)
}

module.exports = _isNumber
