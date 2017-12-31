'use strict'

const objnest = require('objnest')
let flattened = objnest.flatten({
    'foo': {'bar': 'baz'}
})
console.log(flattened) // => {'foo.bar': 'baz'}
