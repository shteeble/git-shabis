#!/usr/bin/env node

/**
 * Measure test coverage.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const { coverage } = require('amocha')

runTasks('cover', [
  () => coverage('test/*_test.js', {
    dir: 'coverage'
  })
], true)
