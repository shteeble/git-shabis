'use strict'

const objnest = require('objnest')
let expanded = objnest.expand({
  'foo.bar[0]': 'baz0',
  'foo.bar[1]': 'baz1'
})
console.log(expanded) // => {foo: bar:['baz0', 'baz1']}}
