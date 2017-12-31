/**
 * Get git config values.
 * @function get
 * @param {string} [namespace] - Namespace to get.
 * @param {object} options - Optional settings.
 * @param {string} [options.location] - Config file location. (global, system, or local)
 * @returns {Promise}
 */

'use strict'

const argx = require('argx')
const co = require('co')
const childProcess = require('child_process')
const os = require('os')
const objnest = require('objnest')

/** @lends get */
function get (namespace, options = {}) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('Callback is no more supported. Use promise interface instead.')
  }
  options = args.pop('object') || {}
  namespace = args.shift('string') || null
  return co(function * () {
    let cmd = _getCommand(options.location)
    let stdout = yield new Promise((resolve, reject) =>
      childProcess.exec(cmd, (err, stdout, stderr) =>
        (err || stderr) ? reject(err || stderr) : resolve(stdout)
      )
    )
    return _parseStdout(stdout, namespace)
  })
}

get.sync = function (namespace, options) {
  let args = argx(arguments)
  options = args.pop('object') || {}
  namespace = args.shift('string') || null
  let cmd = _getCommand(options.location)
  let stdout = childProcess.execSync(cmd)
  return _parseStdout(stdout, namespace)
}

function _getCommand (location) {
  let cmd = 'git config --list'
  if (location) {
    cmd += (' --' + location)
  }
  return cmd
}
function _parseStdout (stdout, namespace) {
  let config = {}
  String(stdout).split(os.EOL)
    .filter((line) => !!line)
    .forEach((line) => {
      let [key, val] = line.split('=')
      if (val === undefined) {
        return
      }
      config[ key ] = val
    })
  config = objnest.expand(config)
  if (namespace) {
    let namespaceSplit = namespace.split('.')
    namespaceSplit.forEach((namespace) => {
      config = config[ namespace ]
    })
  }
  return config
}

module.exports = get
