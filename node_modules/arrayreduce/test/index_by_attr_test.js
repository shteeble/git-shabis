/**
 * Test case for indexByAttr.
 * Runs with mocha.
 */
"use strict";

const indexByAttr = require('../lib/index_by_attr.js'),
    assert = require('assert');

describe('index-by-attr', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Index by attr', (done) => {
        let index = [
            {id: 1, name: 'foo'},
            {id: 2, name: 'bar'}
        ].reduce(indexByAttr('id'), {});
        assert.deepEqual(index, {
            '1': {id: 1, name: 'foo'}, '2': {id: 2, name: 'bar'}
        });
        done();
    });
});

