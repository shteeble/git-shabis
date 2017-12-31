/**
 * Convert string into sentence case.
 * First letter capped and each punctuations are joined with space.
 * @memberof module:stringcase/lib
 * @function sentencecase
 * @param {string} str - String to convert.
 * @returns {string} Sentence cased string.
 */

'use strict'

const lowercase = require('./lowercase')
const trimcase = require('./trimcase')
const snakecase = require('./snakecase')
const capitalcase = require('./capitalcase')

const JOINER = ' '

/** @lends sentencecase*/
function sentencecase (str) {
  str = String(str).replace(/^[\-_\.\s]/g, JOINER)
  if (!str) {
    return str
  }
  return capitalcase(snakecase(trimcase(str)).replace(/_/g, JOINER))
}

module.exports = sentencecase
