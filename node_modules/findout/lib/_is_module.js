/**
 * @function _isModule
 * @private
 */

'use strict'

/** @lends _isModule */
function _isModule (filename) {
  try {
    return !!require.resolve(filename)
  } catch (e) {
    return false
  }
}

module.exports = _isModule
