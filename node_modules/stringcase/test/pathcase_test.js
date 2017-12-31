/**
 * Test case for module:stringcase/lib.pathcase.
 * Runs with mocha.
 */
'use strict'

const pathcase = require('../lib/pathcase.js')
const assert = require('assert')

describe('pathcase', () => {
  it('Pathcase', (done) => {
    assert.equal(pathcase('fooBar'), 'foo/bar')
    assert.equal(pathcase('foo_bar'), 'foo/bar')
    assert.equal(pathcase('foo-bar'), 'foo/bar')
    assert.equal(pathcase('foo.bar'), 'foo/bar')
    assert.equal(pathcase('_bar_baz'), '/bar/baz')
    assert.equal(pathcase('.bar_baz'), '/bar/baz')
    assert.equal(pathcase(''), '')
    assert.strictEqual(pathcase(null), 'null')
    assert.strictEqual(pathcase(undefined), 'undefined')
    done()
  })
})

/* global describe, it */
