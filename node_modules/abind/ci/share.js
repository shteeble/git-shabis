#!/usr/bin/env node

/**
 * Share this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks, execcli } = require('ape-tasking')
const { description, repository } = require('../package.json')

runTasks('share', [
  () => execcli('hub', [ 'init' ]),
  () => execcli('hub', [ 'create', { d: description }, repository ]),
  () => execcli('travis', [ 'enable', { r: repository } ])
], true)
