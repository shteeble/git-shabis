#!/usr/bin/env node

/**
 * Run tests.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const amocha = require('amocha')

runTasks('test', [
  () => amocha('test/*_test.js', {
    timeout: 4000
  })
], true)
