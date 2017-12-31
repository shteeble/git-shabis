#!/usr/bin/env node

/**
 * Release this package.
 */

"use strict";

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeReleasing = require('ape-releasing')

apeTasking.runTasks('release', [
  () => apeReleasing.releasePackage({
    beforeRelease: [
      './ci/build.js',
      './ci/test.js'
    ]
  })
], true)
