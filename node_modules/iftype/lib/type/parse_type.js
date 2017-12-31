/**
 * Parse a type.
 * @memberof module:iftype/lib/type
 * @function parseType
 * @param {string|object|function} type - Type to parse.
 * @private
 */

'use strict'

/** @lends parseType */
function parseType (type) {
  if (type === Function) {
    return 'function'
  }
  if (type === Array) {
    return 'array'
  }
  if (type === String) {
    return 'string'
  }
  if (type === Number) {
    return 'number'
  }
  if (typeof type === 'string') {
    type = String(type).toLowerCase().trim()
  }
  return type
}

module.exports = parseType
