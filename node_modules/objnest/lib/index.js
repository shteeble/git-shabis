/**
 * Convert nested object to flatten or expand.
 * @module objnest
 * @version 3.0.9
 */

'use strict'

const create = require('./create')
const Objnest = require('./objnest')

let lib = create()

Object.assign(lib, create, {
  create,
  Objnest
})

module.exports = lib
