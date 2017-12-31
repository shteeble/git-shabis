/**
 * Test case for module:stringcase/lib/string.camelcase
 * Runs with mocha
 */

'use strict'

const camelcase = require('../shim/node/camelcase.js')
const assert = require('assert')

describe('camelcase', () => {
  it('Convert to camel case.', (done) => {
    assert.equal(camelcase('FOO'), 'foo')
    assert.equal(camelcase('FOO_BAR'), 'fooBar')
    assert.equal(camelcase('FooBar'), 'fooBar')
    assert.equal(camelcase('foo_bar'), 'fooBar')
    assert.equal(camelcase('foo-bar'), 'fooBar')
    assert.equal(camelcase('foo.bar'), 'fooBar')
    assert.equal(camelcase('_bar_baz'), 'barBaz')
    assert.equal(camelcase('.bar_baz'), 'barBaz')
    assert.equal(camelcase(''), '')
    assert.strictEqual(camelcase(null), 'null')
    assert.strictEqual(camelcase(undefined), 'undefined')
    done()
  })
})

/* global describe, it */