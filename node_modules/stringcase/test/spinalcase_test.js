/**
 * Test case for module:stringcase/lib/string.spinalcase
 * Runs with mocha
 */

'use strict'

const spinalcase = require('../lib/spinalcase.js')
const assert = require('assert')

describe('spinalcase', () => {
  it('Convert to camel case.', (done) => {
    assert.equal(spinalcase('fooBar'), 'foo-bar')
    assert.equal(spinalcase('foo_bar'), 'foo-bar')
    assert.equal(spinalcase('foo-bar'), 'foo-bar')
    assert.equal(spinalcase('foo.bar'), 'foo-bar')
    assert.equal(spinalcase('_bar_baz'), '-bar-baz')
    assert.equal(spinalcase('.bar_baz'), '-bar-baz')
    assert.equal(spinalcase(''), '')
    assert.strictEqual(spinalcase(null), 'null')
    assert.strictEqual(spinalcase(undefined), 'undefined')
    done()
  })
})

/* global describe, it */
