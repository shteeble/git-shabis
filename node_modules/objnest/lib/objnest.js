/**
 * @class Objnest
 * @param {object} config
 */
'use strict'

const extend = require('extend')
const abind = require('abind')
const isArrayKey = require('./key/is_array_key')
const fromArrayKey = require('./key/from_array_key')
const toArrayKey = require('./key/to_array_key')

/** @lends Objnest */
function Objnest (config) {
  let s = this
  extend(s, config || {})
  abind(s)
}

Objnest.prototype = {
  separator: '.',
  /**
   * @function expand
   * @param {object} object - Obj to flatten
   * @returns {object} Flatten obj.
   * @example
   *  let obj = objnest.expand({
   *      'foo.bar': 'baz'
   *  })
   *  console.log(obj) // => {foo: {bar: 'baz'}}
   */
  expand (object) {
    let s = this
    if (Array.isArray(object)) {
      return object.map((object) => s.expand(object))
    }
    let separator = s.separator
    let result = {}
    Object.keys(object).forEach((key) => {
      let val = object[ key ]
      let needsSeparate = !!~key.indexOf(separator)
      if (needsSeparate) {
        let subKeys = key.split(separator)
        let subObj = {}
        let thisKey = subKeys.shift()
        subObj[ subKeys.join('.') ] = val
        let subExpandedObj = s.expand(subObj)
        let thisVal = result[ thisKey ]
        val = s._merge(thisVal, subExpandedObj)
        key = thisKey
      }
      if (isArrayKey(key)) {
        let arrayKey = fromArrayKey(key)
        result[ arrayKey.name ] = result[ arrayKey.name ] || []
        result[ arrayKey.name ][ arrayKey.index ] = s._merge(
          result[ arrayKey.name ][ arrayKey.index ],
          val
        )
      } else {
        result[ key ] = val
      }
    })
    return result
  },
  /**
   * Flatten nested object.
   * @param {object} nested - Object to flatten.
   * @returns {object} - Flattened object.
   * @example
   *  let flattened = objnest.flatten({
   *      'foo': {'bar': 'baz'}
   *  })
   *  console.log(flattened) // => {'foo.bar': 'baz'}
   */
  flatten (nested) {
    let s = this
    if (typeof nested === 'string') {
      return nested
    }
    let separator = s.separator
    let flattened = {}
    Object.keys(nested || {}).forEach((key) => {
      let value = nested[ key ]
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'function':
          flattened[ key ] = value
          break
        default:
          let subValues = s.flatten(value)
          Object.keys(subValues).forEach((subKey) => {
            let fullKey
            if (Array.isArray(value)) {
              fullKey = key + toArrayKey(subKey)
            } else {
              fullKey = [ key, subKey ].join(separator)
            }
            flattened[ fullKey ] = subValues[ subKey ]
          })
          break
      }
    })
    return flattened
  },
  _merge (v1, v2) {
    if (typeof v1 === 'undefined') {
      return v2
    }
    if (typeof v2 === 'undefined') {
      return v1
    }
    return extend(true, v1, v2 || {})
  }
}

module.exports = Objnest
