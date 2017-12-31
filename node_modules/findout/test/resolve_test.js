/**
 * Test case for resolve.
 * Runs with mocha.
 */
'use strict'

const resolve = require('../lib/resolve.js')
const co = require('co')
const assert = require('assert')

it('Do resolve.', () => co(function * () {
  assert.equal(resolve(__filename), __filename)
  assert.throws(function () {
    resolve('__invalid_module_name_______')
  })
}))
