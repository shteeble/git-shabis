/**
 * Convert string into sentence case.
 * First letter capped and each punctuations is capitalcase and joined with space.
 * @memberof module:stringcase/lib
 * @function titlecase
 * @param {string} str - String to convert.
 * @returns {string} Title cased string.
 */

'use strict'

const snakecase = require('./snakecase')
const lowercase = require('./lowercase')
const trimcase = require('./trimcase')
const capitalcase = require('./capitalcase')

const LOWERCASE_WORDS = 'a,the,and,or,not,but,for,of'.split(',')

/** @lends titlecase*/
function titlecase (str) {
  return snakecase(str).split(/_/g)
    .map(trimcase)
    .map(function (word) {
      var lower = !!~LOWERCASE_WORDS.indexOf(word)
      if (lower) {
        return lowercase(word)
      } else {
        return capitalcase(word)
      }
    }).join(' ')
}

module.exports = titlecase;


