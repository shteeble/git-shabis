#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const coz = require('coz')

runTasks('build', [
  () => coz.render([
    '.*.bud',
    'example/.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ])
], true)
