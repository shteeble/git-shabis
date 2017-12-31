'use strict'

const abind = require('abind')

class Talker {
  constructor (name) {
    const s = this
    s.name = name
    abind(s)
  }

  sayHi () {
    const s = this
    return `Hi, i'm ${s.name}`
  }
}

let { sayHi } = new Talker('Tom')

console.log(sayHi()) // -> Hi, i'm Tom
