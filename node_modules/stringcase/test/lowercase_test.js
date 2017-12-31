/**
 * Test case for lowercase.
 * Runs with mocha.
 */
'use strict'

const lowercase = require('../lib/lowercase.js')
const assert = require('assert')

describe('lowercase', () => {
  it('Lowercase', (done) => {
    assert.equal(lowercase(''), '')
    assert.equal(lowercase("Foo"), "foo")
    done()
  })

  it('Is lowercase.', (done) => {
    assert.equal(lowercase.isLowercase("foo"), true)
    assert.equal(lowercase.isLowercase("fooBar"), false)
    assert.equal(lowercase.isLowercase("FOO"), false)
    assert.equal(lowercase.isLowercase("FOO_BAR"), false)
    done()
  })
})

/* global describe, it */
