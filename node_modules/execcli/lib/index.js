/**
 * Execute CLI command on sub process.
 * @module execcli
 * @version 4.0.11
 */

'use strict'

const execcli = require('./execcli')
const npmBin = require('./npm_bin')

let lib = execcli.bind(this)

Object.assign(lib, {
  execcli,
  npmBin
})

module.exports = lib
