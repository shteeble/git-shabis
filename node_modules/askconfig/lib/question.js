/**
 * Ask for config.
 * @memberof module:askconfig/lib
 * @constructor Question
 * @param {object|string} values - Question values or query.
 */
'use strict'

const clc = require('cli-color')

/** @lends Question */
function Question (values) {
  const s = this
  Object.assign(s, values)
}

Question.prototype = {
  query () {
    const s = this
    let query = clc.cyan('? ') + `${s.key}: `
    if (s.default) {
      query += clc.blackBright(`(${s.default}) `)
    }
    return query
  },
  default: null,
  key: null
}

Question.new = function (values) {
  return new Question(values)
}

module.exports = Question