/**
 * Test case for cramcase.
 * Runs with mocha.
 */
'use strict'

const cramcase = require('../lib/cramcase.js')
const assert = require('assert')
const co = require('co')

describe('cramcase', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Convert to cram case.', (done) => {
    assert.equal(cramcase('FooBar'), 'foobar')
    assert.equal(cramcase('FOO_BAR'), 'foobar')
    assert.equal(cramcase('fooBar'), 'foobar')
    assert.equal(cramcase('foo_bar'), 'foobar')
    assert.equal(cramcase('foo-bar'), 'foobar')
    assert.equal(cramcase('foo.bar'), 'foobar')
    assert.equal(cramcase('_bar_baz'), 'barbaz')
    assert.equal(cramcase('.bar_baz'), 'barbaz')
    assert.equal(cramcase(''), '')
    assert.strictEqual(cramcase(null), 'null')
    assert.strictEqual(cramcase(undefined), 'undefined')
    done()
  })
})

/* global describe, before, after, it */
