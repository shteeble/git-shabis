/**
 * Run git config command
 * @module gitconfig
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get get () { return d(require('./get')) },
  get set () { return d(require('./set')) },
  get unset () { return d(require('./unset')) }
}
