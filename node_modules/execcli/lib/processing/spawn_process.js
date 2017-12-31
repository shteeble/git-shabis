/**
 * @function spawnProcess
 */
'use strict'

const co = require('co')
const childProcess = require('child_process')

/** @lends spawnProcess */
function spawnProcess (bin, args, options) {
  return co(function * () {
    return yield new Promise((resolve, reject) => {
      let spawned = childProcess.spawn(bin, args, options)
      spawned.stdout.pipe(process.stdout)
      spawned.stderr.pipe(process.stderr)
      spawned.on('exit', function (exitCode) {
        let err = exitCode === 0 ? null : new Error(`Exit with code: ${exitCode}`)
        err ? reject(err) : resolve()
      })
      return spawned
    })
  })
}

module.exports = spawnProcess
