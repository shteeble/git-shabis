/**
 * Type check instance.
 * @constructor Iftype
 * @param {*} value - Value to check.
 */

'use strict'

const is = require('./is')

/** @lends Iftype */
function Iftype(val) {
  const s = this
  s.val(val)
}

Iftype.prototype = {
  /**
   * Detect type matches.
   * @param {string} type
   * @returns {boolean} - Type matches or not.
   */
  is: function typeIs(type) {
   const s = this
   return is(type, s.val())
  },
  /**
   * Detect if string.
   * @returns {boolean} - Type matches or not.
   */
  isString: function isStringType() {
   const s = this
   return s.is('string')
  },
  /**
   * Detect if number.
   * @returns {boolean} - Type matches or not.
   */
  isNumber: function isNumberType() {
   const s = this
   return s.is('number')
  },
  /**
   * Detect if object.
   * @returns {boolean} - Type matches or not.
   */
  isObject: function isObjectType() {
   const s = this
   return s.is('object')
  },
  /**
   * Detect if array.
   * @returns {boolean} - Type matches or not.
   */
  isArray: function isArrayType() {
   const s = this
   return s.is('array')
  },
  /**
   * Detect if function.
   * @returns {boolean} - Type matches or not.
   */
  isFunction: function isFunctionType() {
   const s = this
   return s.is('function')
  },
  val: function(val){
   const s = this
   if (arguments.length === 0) {
    return s._val;
   }
   s._val = val;
   return s;
  }
};

module.exports = Iftype;
