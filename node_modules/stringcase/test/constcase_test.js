/**
 * Test case for module:stringcase/lib/string.constcase.
 * Runs with mocha.
 */
'use strict'

const constcase = require('../lib/constcase.js')
const assert = require('assert')

describe('constcase', () => {
  it('Constcase', (done) => {
    assert.equal(constcase('FOO_BAR'), 'FOO_BAR')
    assert.equal(constcase('fooBar'), 'FOO_BAR')
    assert.equal(constcase('foo_bar'), 'FOO_BAR')
    assert.equal(constcase('foo-bar'), 'FOO_BAR')
    assert.equal(constcase('foo.bar'), 'FOO_BAR')
    assert.equal(constcase('_bar_baz'), '_BAR_BAZ')
    assert.equal(constcase('.bar_baz'), '_BAR_BAZ')
    assert.equal(constcase(''), '')
    assert.strictEqual(constcase(null), 'NULL')
    assert.strictEqual(constcase(undefined), 'UNDEFINED')
    done()
  })

  it('Is constcase.', (done) => {
    assert.equal(constcase.isConstcase('foo'), false)
    assert.equal(constcase.isConstcase('foo_bar'), false)
    assert.equal(constcase.isConstcase('fooBar'), false)
    assert.equal(constcase.isConstcase('FOO_BAR'), true)
    done()
  })
})

/* global describe, it */
