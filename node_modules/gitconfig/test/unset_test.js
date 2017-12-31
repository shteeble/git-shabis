/**
 * Test case for unset.
 * Runs with mocha.
 */
'use strict'

const set = require('../lib/set.js')
const get = require('../lib/get.js')
const unset = require('../lib/unset.js')
const co = require('co')
const assert = require('assert')

describe('unset', function () {
  it('Unset config', () => co(function * () {
    let val
    yield set('test.foo', 'bar')
    val = yield get('test.foo')
    assert.equal(val, 'bar')
    yield unset('test.foo')
    val = yield get('test.foo')
    assert.equal(typeof val, 'undefined')
  }))

  it('Unset config with array.', () => co(function * () {
    let val
    yield set('test.baz', 'bar')
    val = yield get('test.baz')
    assert.equal(val, 'bar')
    yield unset([ 'test.baz' ])
    val = yield get('test.baz')
    assert.equal(typeof val, 'undefined')
  }))
})

/* global describe, it */
