/**
 * Test case for module:stringcase/lib/string.pascalcase
 * Runs with mocha
 */

'use strict'

const pascalcase = require('../lib/pascalcase.js')
const assert = require('assert')

describe('pascalcase', () => {
  it('Convert to pascal case.', (done) => {
    assert.equal(pascalcase('foo_bar'), 'FooBar')
    assert.equal(pascalcase('foo-bar'), 'FooBar')
    assert.equal(pascalcase('foo.bar'), 'FooBar')
    assert.equal(pascalcase('_bar_baz'), 'BarBaz')
    assert.equal(pascalcase('.bar_baz'), 'BarBaz')
    assert.equal(pascalcase(''), '')
    assert.strictEqual(pascalcase(null), 'Null')
    assert.strictEqual(pascalcase(undefined), 'Undefined')
    done()
  })
})

/* global describe, it */
