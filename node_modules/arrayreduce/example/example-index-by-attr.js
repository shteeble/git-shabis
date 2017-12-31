"use strict";

const arrayreduce = require('arrayreduce');

// Define a reducing function.
let indexByAttr = arrayreduce.indexByAttr();

// Execute indexing.
let index = [
    {id: 1, name: 'foo'},
    {id: 2, name: 'bar'}
].reduce(indexByAttr('id'), {});
console.log(index); // -> {'1': {id: 1, name: 'foo'}, '2': {id: 2, name: 'bar'}}
