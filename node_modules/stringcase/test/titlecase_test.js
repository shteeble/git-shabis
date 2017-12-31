/**
 * Test case for module:stringcase/lib/string.titlecase
 * Runs with mocha
 */

'use strict'

const titlecase = require('../lib/titlecase.js')
const assert = require('assert')

describe('titlecase', () => {
  it('Convert to camel case.', (done) => {
    assert.equal(titlecase('fooBar'), 'Foo Bar')
    assert.equal(titlecase('foo_bar'), 'Foo Bar')
    assert.equal(titlecase('foo_for_bar'), 'Foo for Bar')
    assert.equal(titlecase('foo-bar'), 'Foo Bar')
    assert.equal(titlecase('foo.bar'), 'Foo Bar')
    assert.equal(titlecase('_bar_baz'), ' Bar Baz')
    assert.equal(titlecase('.bar_baz'), ' Bar Baz')
    assert.equal(titlecase(''), '')
    assert.strictEqual(titlecase(null), 'Null')
    assert.strictEqual(titlecase(undefined), 'Undefined')
    done()
  })
})

/* global describe, it */
