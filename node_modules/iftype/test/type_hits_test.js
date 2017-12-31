/**
 * Test case for typeHits.
 * Runs with mocha.
 */
'use strict'

const typeHits = require('../lib/type/type_hits.js')
const assert = require('assert')

describe('type hit', () => {
  it('Type hits', (done) => {
    const num1 = 0
    const str1 = ''
    const str2 = 'foo'
    const obj1 = {}
    const obj2 = Object.create(obj1)
    const Func = function () {
    }
    const func = new Func()

    // Check numbers
    assert.equal(typeHits(num1, 'number'), true)
    assert.equal(typeHits(num1, 'string'), false)
    assert.equal(typeHits(num1, 'function'), false)
    assert.equal(typeHits(num1, 'object'), false)
    assert.equal(typeHits(num1, obj1), false)
    assert.equal(typeHits(num1, obj2), false)
    assert.equal(typeHits(num1, Func), false)
    assert.equal(typeHits(num1, null), false)
    assert.equal(typeHits(num1, undefined), false)

    // Check empty string.
    assert.equal(typeHits(str1, 'number'), false)
    assert.equal(typeHits(str1, 'string'), true)
    assert.equal(typeHits(str1, 'function'), false)
    assert.equal(typeHits(str1, 'object'), false)
    assert.equal(typeHits(str1, obj1), false)
    assert.equal(typeHits(str1, obj2), false)
    assert.equal(typeHits(str1, Func), false)
    assert.equal(typeHits(str1, null), false)
    assert.equal(typeHits(str1, undefined), false)

    // Check string.
    assert.equal(typeHits(str2, 'number'), false)
    assert.equal(typeHits(str2, 'string'), true)
    assert.equal(typeHits(str2, 'function'), false)
    assert.equal(typeHits(str2, 'object'), false)
    assert.equal(typeHits(str2, obj1), false)
    assert.equal(typeHits(str2, obj2), false)
    assert.equal(typeHits(str2, Func), false)
    assert.equal(typeHits(str2, null), false)
    assert.equal(typeHits(str2, undefined), false)

    // Check object.
    assert.equal(typeHits(obj1, 'number'), false)
    assert.equal(typeHits(obj1, 'string'), false)
    assert.equal(typeHits(obj1, 'function'), false)
    assert.equal(typeHits(obj1, 'object'), true)
    assert.equal(typeHits(obj1, obj1), false)
    assert.equal(typeHits(obj1, obj2), false)
    assert.equal(typeHits(obj1, Func), false)
    assert.equal(typeHits(obj1, null), false)
    assert.equal(typeHits(obj1, undefined), false)

    // Check object inheritance.
    assert.equal(typeHits(obj2, 'number'), false)
    assert.equal(typeHits(obj2, 'string'), false)
    assert.equal(typeHits(obj2, 'function'), false)
    assert.equal(typeHits(obj2, 'object'), true)
    assert.equal(typeHits(obj2, obj1), true) // Hit by `isPrototypeOf`
    assert.equal(typeHits(obj2, obj2), false)
    assert.equal(typeHits(obj2, Func), false)
    assert.equal(typeHits(obj2, null), false)
    assert.equal(typeHits(obj2, undefined), false)

    // Check function.
    assert.equal(typeHits(Func, 'number'), false)
    assert.equal(typeHits(Func, 'string'), false)
    assert.equal(typeHits(Func, 'function'), true)
    assert.equal(typeHits(Func, 'object'), false)
    assert.equal(typeHits(Func, obj1), false)
    assert.equal(typeHits(Func, obj2), false)
    assert.equal(typeHits(Func, Func), false)
    assert.equal(typeHits(Func, func), false)
    assert.equal(typeHits(Func, null), false)
    assert.equal(typeHits(Func, undefined), false)

    // Check function inheritance.
    assert.equal(typeHits(func, 'number'), false)
    assert.equal(typeHits(func, 'string'), false)
    assert.equal(typeHits(func, 'function'), false)
    assert.equal(typeHits(func, 'object'), true)
    assert.equal(typeHits(func, obj1), false)
    assert.equal(typeHits(func, obj2), false)
    assert.equal(typeHits(func, Func), true) // Hit by `instanceof`
    assert.equal(typeHits(func, func), false)
    assert.equal(typeHits(func, null), false)
    assert.equal(typeHits(func, undefined), false)

    done()
  })

  it('Hit with multiple type.', (done) => {
    function MyFunc () {
    }

    assert.equal(typeHits("foo", "string|number|object"), true)
    assert.equal(typeHits("foo", "string|function|object"), true)
    assert.equal(typeHits("foo", "function|number|object"), false)
    assert.equal(typeHits("foo", [ "string", "number|object" ]), true)
    assert.equal(typeHits("foo", [ "string|object", "function" ]), true)
    assert.equal(typeHits("foo", [ "function", "number" ]), false)
    assert.equal(typeHits(new MyFunc, [ MyFunc, "number" ]), true)

    done()
  })
})
