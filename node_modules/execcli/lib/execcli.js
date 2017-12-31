/**
 * Execute cli.
 * @function execcli
 * @param {string} cmdBin - Bin command to execute.
 * @param {Array} cmdArgs - Bin command arguments to execute.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.notfound] - Instruction text when bin not found.
 * @param {string} [options.cwd=process.cwd()] - Working directory path.
 * @return {Promise}
 * @example
 *
 */

'use strict'

const argx = require('argx')
const co = require('co')
const arrayreduce = require('arrayreduce')
const hasbin = require('hasbin')
const path = require('path')
const fs = require('fs')
const spawnProcess = require('./processing/spawn_process')
const _optionArgs = require('./_option_args')

let warnCallback = () => console.log('[execcli] Callback is now deprecated. Use promise instead.')

/** @lends execcli */
function execcli (cmdBin, cmdArgs, options) {
  let args = argx(arguments)
  let callback = args.pop('function')
  cmdBin = args.shift('string')
  cmdArgs = (args.shift('array') || []).map((arg) => {
    if (typeof arg === 'object') {
      return _optionArgs(arg)
    }
    return arg
  }).reduce(arrayreduce.arrayConcat(), [])
  options = args.pop('object') || {}

  let here = process.cwd()
  let cwd = options.cwd || process.cwd()

  return co(function * () {
    process.chdir(cwd)
    let hasBinAsIs = yield new Promise((resolve) =>
      hasbin(cmdBin, (hasBinAsIs) => resolve(hasBinAsIs))
    )
    let hasbinAsPath = yield new Promise((resolve) =>
      fs.exists(path.resolve(cmdBin), (hasbinAsPath) => resolve(hasbinAsPath))
    )
    let valid = hasBinAsIs || hasbinAsPath
    if (!valid) {
      throw new Error(
        `Command \`${cmdBin}\` not found. ${options.notfound}`
      )
    }
    return yield spawnProcess(cmdBin, cmdArgs, options)
  }).then((result) => {
    process.chdir(here)
    if (callback) {
      warnCallback()
      callback(null)
    }
    return result
  }).catch((err) => {
    process.chdir(here)
    if (callback) {
      warnCallback()
      callback(err)
    }
    return Promise.reject(err)
  })
}

execcli._optionArgs = _optionArgs

module.exports = execcli
