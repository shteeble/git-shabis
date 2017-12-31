/**
 * Test case for iftype.
 * Runs with mocha.
 */
'use strict'

const index = require('../lib/index.js')
const assert = require('assert')

describe('index', () => {
  it('index', (done) => {
    assert.ok(index(1).is('number'))
    assert.ok(!index('foo').is('number'))
    assert.ok(!index(123).is('string'))
    assert.ok(index('foo').is('string'))
    assert.ok(index('foo').isString())
    assert.ok(index.isString('foo'))
    assert.ok(index(function () {
    }).is('function'))
    assert.ok(index(function () {
    }).isFunction())
    assert.ok(index.isFunction(function () {
    }))
    assert.ok(!index('1234').is('function'))
    assert.ok(!index(123).is('function'))
    done()
  })
})

