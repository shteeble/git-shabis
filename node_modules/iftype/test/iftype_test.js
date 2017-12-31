/**
 * Test case for iftype.
 * Runs with mocha.
 */
'use strict'

const Iftype = require('../lib/iftype.js')
const assert = require('assert')

describe('iftype', () => {
  it('Iftype', (done) => {
    assert.ok(new Iftype(1).is('number'))
    assert.ok(!new Iftype('foo').is('number'))
    assert.ok(new Iftype(1).isNumber())
    assert.ok(!new Iftype('foo').isNumber())
    assert.ok(!new Iftype(123).is('string'))
    assert.ok(!new Iftype(123).isString())
    assert.ok(new Iftype('foo').is('string'))
    assert.ok(new Iftype('foo').isString())
    assert.ok(new Iftype(function () {
    }).is('function'))
    assert.ok(new Iftype(function () {
    }).isFunction())
    assert.ok(!new Iftype('1234').is('function'))
    assert.ok(!new Iftype('1234').isFunction())
    assert.ok(!new Iftype(123).is('function'))
    assert.ok(!new Iftype(123).isFunction())
    done()
  })
})

