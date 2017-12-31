/**
 * Ask for configuration.
 * @function askconfig
 * @param {object} props - Values to ask.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.msg] - Message to print before interaction.
 * @returns {Promise}
 */

'use strict'

const co = require('co')
const argx = require('argx')
const objnest = require('objnest')
const Question = require('./question')
const questionInterface = require('./question_interface')

/** @lends askconfig */
function askconfig (props, options = {}) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('Callback is no longer supported. Use promise interface instead.')
  }
  props = args.shift()
  options = args.pop('object') || {}

  let { msg } = options
  if (msg) {
    [].concat(msg).forEach((msg) => {
      console.log(msg)
    })
  }

  let questions = Object.keys(props).map((key) => {
    return Question.new({
      key, default: props[ key ]
    })
  })

  let qi = questionInterface()
  let result = {}
  let i = 0
  return co(function * () {
    for (let question of questions) {
      let answer = yield new Promise((resolve, reject) =>
        qi.question(question.query(), (answer) => resolve(answer))
      )
      let key = question.key || i
      i++
      result[ key ] = String(answer || question.default).trim()
    }
    return yield new Promise((resolve) => {
      qi.on('close', () => resolve(objnest.expand(result)))
      qi.close()
    })
  })
}

module.exports = askconfig
