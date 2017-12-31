/**
 * Set git config values.
 * @function set
 * @param {string} key - Key to set.
 * @param {string} val - Value to set.
 * @param {object} [options] - Optional settings.
 * @returns {Promise}
 */

'use strict'

const argx = require('argx')
const co = require('co')
const execcli = require('execcli')
const objnest = require('objnest')

/** @lends set */
function set (key, val, options = {}) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('Callback is no more supported. Use promise interface instead.')
  }
  let setting = args.shift('object') || {}
  key = args.shift('string')
  val = args.shift('string')
  if (key) {
    setting[ key ] = val
  }
  setting = objnest.flatten(setting)
  options = args.pop('object') || {}
  return co(function * () {
    for (let key of Object.keys(setting)) {
      let cmdArgs = [ 'config' ]
      if (options.location) {
        cmdArgs.push('--' + options.location)
      }
      cmdArgs.push(key)
      cmdArgs.push(setting[ key ])
      yield execcli('git', cmdArgs)
    }
  })
}

module.exports = set
