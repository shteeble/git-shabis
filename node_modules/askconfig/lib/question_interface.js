/**
 * Create question interface.
 * @function questionInterface
 */

'use strict'

const readline = require('readline')

/** @lends questionInterface */
function questionInterface () {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

module.exports = questionInterface
