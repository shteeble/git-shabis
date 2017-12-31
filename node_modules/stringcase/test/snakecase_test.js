/**
 * Test case for module:stringcase/lib/string.snakecase
 * Runs with mocha
 */

'use strict'

const snakecase = require('../lib/snakecase.js')
const assert = require('assert')

describe('snakecase', () => {
  it('Convert to snake case.', (done) => {
    assert.equal(snakecase('FooBar'), 'foo_bar')
    assert.equal(snakecase('FOO_BAR'), 'foo_bar')
    assert.equal(snakecase('fooBar'), 'foo_bar')
    assert.equal(snakecase('foo_bar'), 'foo_bar')
    assert.equal(snakecase('foo-bar'), 'foo_bar')
    assert.equal(snakecase('foo.bar'), 'foo_bar')
    assert.equal(snakecase('_bar_baz'), '_bar_baz')
    assert.equal(snakecase('.bar_baz'), '_bar_baz')
    assert.equal(snakecase(''), '')
    assert.strictEqual(snakecase(null), 'null')
    assert.strictEqual(snakecase(undefined), 'undefined')
    done()
  })

  it('Check snakecase or not.', (done) => {
    assert.equal(snakecase.isSnakecase('foo'), true)
    assert.equal(snakecase.isSnakecase('foo_bar'), true)
    assert.equal(snakecase.isSnakecase('fooBar'), false)
    assert.equal(snakecase.isSnakecase('FOO_BAR'), false)
    done()
  })
})

/* global describe, it */
