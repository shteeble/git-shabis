/**
 * Resolve to findout.
 * @function findout.resolve
 * @param {string} name - Module name.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.cwd=process.cwd()] - Current working directory.
 * @param {boolean} [options.safe=false] - No throw when not found.
 * @returns {*} - Resolved module.
 * @throws - Module not found error.
 */

'use strict'

const path = require('path'),
  _isModule = require('./_is_module');

/** @lends resolve */
function resolve (name, options = {}) {
  if (_isModule(name)) {
    return name
  }
  let cwd = options.cwd || process.cwd()
  let safe = !!options.safe
  do {
    let fromDir = path.join(cwd, name)
    if (_isModule(fromDir)) {
      return fromDir
    }
    var fromNodeModulesDir = path.join(cwd, 'node_modules', name)
    if (_isModule(fromNodeModulesDir)) {
      return fromNodeModulesDir
    }

    var parentBasedir = path.dirname(cwd)
    if (parentBasedir === cwd) {
      break
    }
    cwd = parentBasedir
  } while (true)
  if (safe) {
    return null
  } else {
    throw new Error(`Module not found: ${name}`)
  }
}

module.exports = resolve
