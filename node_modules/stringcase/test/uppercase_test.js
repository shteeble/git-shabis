/**
 * Test case for uppercase.
 * Runs with mocha.
 */
'use strict'

const uppercase = require('../lib/uppercase.js')
const assert = require('assert')

describe('uppercase', () => {
  it('Uppercase', (done) => {
    assert.equal(uppercase(''), '')
    assert.equal(uppercase("foo"), "FOO")
    done()
  })

  it('Is uppercase.', (done) => {
    assert.equal(uppercase.isUppercase("foo"), false)
    assert.equal(uppercase.isUppercase("fooBar"), false)
    assert.equal(uppercase.isUppercase("FOO"), true)
    assert.equal(uppercase.isUppercase("FOO_BAR"), true)
    done()
  })
})

/* global describe, it */
