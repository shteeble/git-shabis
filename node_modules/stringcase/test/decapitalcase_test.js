/**
 * Test case for decapitalcase.
 * Runs with mocha.
 */
'use strict'

const decapitalcase = require('../lib/decapitalcase.js')
const assert = require('assert')

describe('decapital', () => {
  it('Decapitalcase', (done) => {
    assert.equal(decapitalcase(''), '')
    assert.equal(decapitalcase('FooBar'), 'fooBar')
    assert.equal(decapitalcase('fooBar'), 'fooBar')
    done()
  })
})

/* global describe, it */
