/**
 * Test case for module:stringcase/lib/string.capitalcase
 * Runs with mocha
 */

'use strict'

const capitalcase = require('../lib/capitalcase.js')
const assert = require('assert')

describe('captialcase', () => {
  it('Convert to camel case.', (done) => {
    assert.equal(capitalcase(''), '')
    assert.equal(capitalcase('FooBar'), 'FooBar')
    assert.equal(capitalcase('fooBar'), 'FooBar')
    done()
  })
})

/* global describe, it */
