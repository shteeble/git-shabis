/**
 * Unit test for findout.
 * Runs with mocha.
 */

'use strict'

const findout = require('../shim/node/findout')
const co = require('co')
const assert = require('assert')

it('Do findout.', () => co(function * () {
  assert.ok(findout(__filename))
  assert.throws(() => {
    findout('__invalid_module_name_______')
  })
  assert.doesNotThrow(() => {
    findout('__invalid_module_name_______', {
      safe: true
    })
  })
}))

/* global it */