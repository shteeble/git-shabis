/**
 * Check types
 * @module iftype
 * @version 3.0.2
 */

'use strict'

const IfType = require('./iftype')
const is = require('./is')
const create = require('./create')

let lib = create.bind()
lib.create = create
lib.IfType = IfType

lib.is = is
lib.isString = is.bind(lib, 'string')
lib.isNumber = is.bind(lib, 'number')
lib.isObject = is.bind(lib, 'object')
lib.isArray = is.bind(lib, 'array')
lib.isFunction = is.bind(lib, 'function')

module.exports = lib
