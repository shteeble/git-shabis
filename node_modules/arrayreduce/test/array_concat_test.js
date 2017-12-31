/**
 * Test case for arrayConcat.
 * Runs with mocha.
 */
"use strict";

const arrayConcat = require('../lib/array_concat.js'),
    assert = require('assert');

it('Concat arrays.', (done) => {
    assert.deepEqual(
        ['foo', 'bar', 'baz'],
        ['foo', ['bar', 'baz']].reduce(arrayConcat(), [])
    );
    done();
});

it('Try invalid args.', (done) => {
    assert.throws(() => {
        arrayConcat('foo', 'bar');
    });
    done();
});

