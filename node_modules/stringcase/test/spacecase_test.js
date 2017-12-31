/**
 * Test case for module:stringcase/lib.spacecase.
 * Runs with mocha.
 */
'use strict'

const spacecase = require('../lib/spacecase.js')
const assert = require('assert')

describe('Pathcase', () => {
  it('pathcase', (done) => {
    assert.equal(spacecase('fooBar'), 'foo bar')
    assert.equal(spacecase('foo_bar'), 'foo bar')
    assert.equal(spacecase('foo-bar'), 'foo bar')
    assert.equal(spacecase('foo.bar'), 'foo bar')
    assert.equal(spacecase('_bar_baz'), ' bar baz')
    assert.equal(spacecase('.bar_baz'), ' bar baz')
    assert.equal(spacecase(''), '')
    assert.strictEqual(spacecase(null), 'null')
    assert.strictEqual(spacecase(undefined), 'undefined')
    done()
  })
})

/* global describe, it */

