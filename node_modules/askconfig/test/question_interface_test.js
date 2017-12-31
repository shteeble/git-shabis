/**
 * Test case for questionInterface.
 * Runs with mocha.
 */
'use strict'

const questionInterface = require('../lib/question_interface.js')
const assert = require('assert')

describe('qi', () => {
  it('Question interface', (done) => {
    let qi = questionInterface()
    assert.ok(qi)
    qi.on('close', () => {
      done()
    })
    qi.close()
  })
})

