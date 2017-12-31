/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const assert = require('assert')

describe('create', () => {

  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Create', (done) => {
    assert.ok(create())
    done()
  })
})

