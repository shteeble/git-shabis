"use strict";

const arrayreduce = require('arrayreduce');

// Define a reducing function.
let arrayConcat = arrayreduce.arrayConcat();

// Execute sorting.
let values = ['foo', ['bar', 'baz']].reduce(arrayConcat, []);
console.log(values); // -> ['foo', 'baz', 'bar']
