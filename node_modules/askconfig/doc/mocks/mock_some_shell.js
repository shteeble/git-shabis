#!/usr/bin/env node
'use strict'

const askconfig = require('../../lib')

askconfig({
  name: 'foo'
}).then((result) => {
  console.log('result', result)
})