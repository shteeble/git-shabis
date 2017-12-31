/**
 * Bind instance methods
 * @function abind
 * @param {Object} instance - Instance to bind
 * @param {Object} [options={}] - Optional settings
 * @param {Object} [options.proto=getPrototypeOf(instance)] - Prototype to bind
 * @param {string[]} [options.excludes] - Names to exclude
 * @returns {Object} instance - Bounded instance
 */
'use strict'

/** @lends abind */
function abind (instance, options = {}) {
  let {
    proto = Object.getPrototypeOf(instance),
    excludes = []
  } = options
  let propertyNames = Object.getOwnPropertyNames(proto)
    .filter((name) => !~excludes.indexOf(name))
  for (let name of propertyNames) {
    let { get, set } = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(proto, name)
    let shouldBind = !/^__/.test(name) && (get || set)
    if (shouldBind) {
      Object.defineProperty(instance, name, {
        get,
        set
      })
      continue
    }
    let value = proto[ name ]
    if (typeof value === 'function') {
      instance[ name ] = value.bind(instance)
    }
  }
  return instance
}

module.exports = abind
