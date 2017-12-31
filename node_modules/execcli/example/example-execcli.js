#!/usr/bin/env node

/**
 * This is an example to use execcli.
 */

'use strict'

const execcli = require('execcli')

// Equivalent to execute `ls -l .` from command line.
execcli('ls', [ '.', { 'l': true } ]).then(() => {
  /* ... */
})
