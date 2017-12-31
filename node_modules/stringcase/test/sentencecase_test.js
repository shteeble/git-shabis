/**
 * Test case for module:stringcase/lib/string.sentencecase
 * Runs with mocha
 */

'use strict'

const sentencecase = require('../lib/sentencecase.js'),
    assert = require('assert')

describe('sentencecase', () => {
    it('Convert to camel case.', (done) => {
        assert.equal(sentencecase('fooBar'), 'Foo bar')
        assert.equal(sentencecase('foo_bar'), 'Foo bar')
        assert.equal(sentencecase('foo-bar'), 'Foo bar')
        assert.equal(sentencecase('foo.bar'), 'Foo bar')
        assert.equal(sentencecase('_bar_baz'), 'Bar baz')
        assert.equal(sentencecase('.bar_baz'), 'Bar baz')
        assert.equal(sentencecase(''), '')
        assert.strictEqual(sentencecase(null), 'Null')
        assert.strictEqual(sentencecase(undefined), 'Undefined')
        done()

    })
})