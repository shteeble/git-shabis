/**
 * Test case for noop.
 * Runs with mocha.
 */
'use strict'

const noop = require('../lib/noop.js')
const assert = require('assert')

describe('noop', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Noop', (done) => {
    done()
  })
})

/* global describe, before, after, it */
