'use strict'

const objnest = require('objnest')
let expanded = objnest.expand({
    'foo.bar': 'baz'
})
console.log(expanded) // => {foo: {bar: 'baz'}}
