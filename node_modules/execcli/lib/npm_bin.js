/**
 * Execute npm bin script.
 * @function npmBin
 * @param {string} cmdBin - Bin command to execute.
 * @param {Array} cmdArgs - Bin command arguments to execute.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.notfound] - Instruction text when bin not found.
 * @param {string|string[]} [options.search=[]] - Local module search path.
 * @param {function} [callback] - Callback when done.
 */

'use strict'

const findout = require('findout')
const argx = require('argx')
const execcli = require('./execcli')

/** @lends npmBin */
function npmBin (cmd, cmdArgs, options) {
  let args = argx(arguments)
  let callback = args.pop('function')
  options = args.pop('object') || {}

  let search = [].concat(options.search || [])
  cmd = _resolve(cmd, search)
  delete options.search
  if (callback) {
    execcli(cmd, cmdArgs, options, callback)
  }
  return execcli(cmd, cmdArgs, options)
}

module.exports = npmBin

function _resolve (bin, cwd) {
  for (let i = 0; i < cwd.length; i++) {
    let found = _resolveByLocal(bin, cwd[ i ])
    if (found) {
      return found
    }
  }
  return bin
}

function _resolveByLocal (bin, cwd) {
  return findout.resolve('node_modules/.bin/' + bin, {
    safe: true,
    cwd: cwd
  })
}
