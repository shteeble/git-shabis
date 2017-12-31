/**
 * Test case for booleanAnd.
 * Runs with mocha.
 */
"use strict";

const booleanAnd = require('../lib/boolean_and.js'),
    assert = require('assert');


it('Boolean and', (done) => {
    assert.ok([true, true, true].reduce(booleanAnd(), true));
    assert.ok(![true, false, true].reduce(booleanAnd(), true));
    done();
});

