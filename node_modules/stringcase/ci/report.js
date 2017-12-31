#!/usr/bin/env node

/**
 * Send reports.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const { sendToCodeclimate } = require('ape-reporting')

runTasks('report', [
  () => sendToCodeclimate('coverage/lcov.info', {})
], true)
