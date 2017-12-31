'use strict'

const findout = require('findout')

// Resolve a module path.
let pathOfFoo = findout.resolve('foo')

// Find and require a module.
let foo = findout('foo', {
  cwd: __dirname // Lookup from current directory.
})

