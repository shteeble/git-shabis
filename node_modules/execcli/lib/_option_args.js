/**
 * @function _optionArgs
 * @private
 */

'use strict'

const stringcase = require('stringcase')
const arrayreduce = require('arrayreduce')

/** @lends _optionArgs */
function _optionArgs (options) {
  return Object.keys(options)
    .filter((key) => {
      let value = options[ key ]
      let empty = (value === undefined) || (value === null) || (value === '') || (value === false)
      return !empty
    })
    .map((key) => {
      let prefix = key.length === 1 ? '-' : '--'
      let prefixedKey = prefix + stringcase.spinalcase(key).replace(/^\-+/, '')
      let value = options[ key ]
      if (value === true) {
        return [ prefixedKey ]
      } else {
        return [].concat(value || []).map((value) => {
          return [ prefixedKey, value ]
        }).reduce(arrayreduce.arrayConcat(), [])
      }
    }).reduce(arrayreduce.arrayConcat(), [])
}

module.exports = _optionArgs
