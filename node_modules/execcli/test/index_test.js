/**
 * Bud file for index.js
 */

'use strict'

const index = require('../lib')
const assert = require('assert')

describe('index', ()=> {

  it('Eval properties.', (done) => {
    assert.ok(index)
    done()
  })
})
