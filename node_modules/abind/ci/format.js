#!/usr/bin/env node

/**
 * Format files.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const { formatJs } = require('ape-formatting')

runTasks('format', [
  () => formatJs([
    '.*.bud',
    'lib/.*.bud',
    'example/*.js',
    'doc/mocks/*.js',
    'test/.*.bud'
  ], {
    ignore: [
      'lib/index.js'
    ]
  })
], true)
