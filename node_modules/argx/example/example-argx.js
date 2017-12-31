/**
 * This is an example to declare an variadic functions.
 */
'use strict'

const argx = require('argx')

function doSomething (values, options, callback) {
  let args = argx(arguments)
  callback = args.pop('function') || function noop () {} // Consume last argument if it's a function.
  options = args.pop('object') || {} // Consume last argument if it's an object.
  values = args.remain() // Get remaining arguments as array.
  /* ... */
}

doSomething('foo', 'bar')
doSomething('foo', 'bar', { verbose: true })
doSomething('foo', 'bar', (err) => {})
doSomething('foo', 'bar', { verbose: true }, (err) => {})
