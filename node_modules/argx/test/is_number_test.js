/**
 * Test case for isNumber.
 * Runs with mocha.
 */
'use strict'

const isNumber = require('../lib/type/is_number.js')
const assert = require('assert')

describe('isNumber', () => {
  it('Is number', (done) => {
    assert.equal(isNumber(0), true)
    assert.equal(isNumber("0"), true)
    assert.equal(isNumber(""), false)
    assert.equal(isNumber([]), false)
    done()
  })
})

/* global describe, before, after, it */
