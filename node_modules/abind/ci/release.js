#!/usr/bin/env node

/**
 * Release this package.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const { releasePackage } = require('ape-releasing')

runTasks('release', [
  () => releasePackage({
    beforeRelease: [
      './ci/build.js',
      './ci/test.js'
    ]
  })
], true)
