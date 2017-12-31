/**
 * Test case for enumcase.
 * Runs with mocha.
 */
'use strict'

const enumcase = require('../lib/enumcase.js')
const assert = require('assert')

describe('enumcase', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Enumcase', (done) => {
    assert.equal(enumcase('fooBar'), 'foo:bar')
    assert.equal(enumcase('foo_bar'), 'foo:bar')
    assert.equal(enumcase('foo-bar'), 'foo:bar')
    assert.equal(enumcase('foo.bar'), 'foo:bar')
    assert.equal(enumcase('_bar_baz'), ':bar:baz')
    assert.equal(enumcase('.bar_baz'), ':bar:baz')
    assert.equal(enumcase(''), '')
    assert.strictEqual(enumcase(null), 'null')
    assert.strictEqual(enumcase(undefined), 'undefined')
    done()
  })
})

/* global describe, it */
