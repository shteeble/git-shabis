/**
 * Create an instance.
 * @function create
 * @returns {Iftype} - Created instance.
 */

'use strict'

const IfType = require('./iftype')

/** @lends create */
function create (val) {
  return new IfType(val)
}

module.exports = create;
