'use strict'

const objnest = require('objnest')
let flattened = objnest.flatten({
  'foo': { 'bar': [ 'baz0', 'baz1' ] }
})
console.log(flattened) // => {'foo.bar[0]': 'baz0', 'foo.bar[1]': 'baz1'}
