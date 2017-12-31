"use strict";

const arrayreduce = require('arrayreduce');

// Define a reducing function.
let booleanAnd = arrayreduce.booleanAnd();

// Execute reducing.
let result = [true, false, true].reduce(booleanAnd, true);
console.log(result); // -> false
