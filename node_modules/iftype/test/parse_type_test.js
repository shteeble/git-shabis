/**
 * Test case for parseType.
 * Runs with mocha.
 */
'use strict'

const parseType = require('../lib/type/parse_type.js')
const assert = require('assert')

describe('parse type', () => {
  it('Parse type', (done) => {
    assert.equal(parseType('number'), 'number')
    assert.equal(parseType('Number'), 'number')
    assert.equal(parseType(' number '), 'number')
    assert.equal(parseType(' Number '), 'number')
    assert.equal(parseType(Function), 'function')
    assert.equal(parseType(String), 'string')
    assert.equal(parseType(Array), 'array')
    assert.equal(parseType(Number), 'number')
    done()
  })
})

