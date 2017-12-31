/**
 * Test case for set.
 * Runs with mocha.
 */
'use strict'

const set = require('../lib/set.js')
const get = require('../lib/get.js')
const co = require('co')
const assert = require('assert')

describe('set', function () {
  it('Set by key and val', () => co(function * () {
    yield set('test.quz', 'quzzz', {
      location: 'local'
    })
    let val = yield get('test.quz')
    assert.equal(val, 'quzzz')
  }))

  it('Set by object', () => co(function * () {
    yield set({
      test: {
        foo2: 'bar',
        baz2: 'quz'
      }
    }, {
      location: 'local'
    })
    let val = yield get('test.foo2')
    assert.equal(val, 'bar')
  }))
})

/* global describe, it */
