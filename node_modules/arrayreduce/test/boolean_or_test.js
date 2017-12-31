/**
 * Test case for booleanOr.
 * Runs with mocha.
 */
"use strict";

const booleanOr = require('../lib/boolean_or.js'),
    assert = require('assert');

it('Boolean or', (done) => {
    assert.ok([false, true, false].reduce(booleanOr(), false));
    assert.ok(![false, false, false].reduce(booleanOr(), false));
    done();
});

