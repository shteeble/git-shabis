/**
 * Findout a module
 * @function findout
 * @param {string} name - Module name.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.cwd=process.cwd()] - Current working directory.
 * @param {boolean} [options.safe=false] - No throw when not found.
 * @returns {*} - Resolved module
 * @throws - Module not found error.
 */

'use strict'

const resolve = require('./resolve')

/** @lends findout */
function findout (name, options = {}) {
  let resolved = resolve(name, options)
  if (resolved) {
    return require(resolved)
  } else {
    return null
  }
}

module.exports = findout
