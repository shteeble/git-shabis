/**
 * @function is
 * @param {string} type
 * @param {val}
 */

'use strict'

const typeHits = require('./type/type_hits')
const assert = require('assert')

/** @lends is */
function is (type, val) {
  assert.ok(arguments.length === 2, 'Invalid arguments')
  return typeHits(val, type)
}

module.exports = is
