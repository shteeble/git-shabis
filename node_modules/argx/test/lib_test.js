/**
 * Test for argx.
 * Runs with mocha.
 */

'use strict'

const argx = require('../lib')
const assert = require('assert')

function noop () {
}

describe('lib', () => {
  it('Pop arguments.', (done) => {
    function foo () {
      let args = argx(arguments)
      assert.ok(args.pop('function'))
      assert.ok(args.pop(1, 'object'))
      assert.deepEqual(args.remain(), [ 'v1', 'v2' ])
    }

    foo('v1', 'v2', {}, noop)

    {
      (function foo2 () {
        let args = argx(arguments)
        assert.strictEqual(args.pop('function'), undefined)
        assert.deepEqual(args.pop(1, 'object'), { foo: 'bar' })
        assert.deepEqual(args.remain(), [ 'v1', 'v2' ])
      })('v1', 'v2', { foo: 'bar' })
    }

    {
      (function foo4 () {
        let args = argx(arguments)
        assert.strictEqual(args.pop('function'), undefined)
        assert.strictEqual(args.pop('1', 'object'), undefined)
        assert.deepEqual(args.remain(), [ 'v1', 'v2' ])
      })('v1', 'v2')
    }

    {
      (function foo4 () {
        let args = argx(arguments)
        assert.deepEqual(args.pop(2), [ 'v4', 'v5' ])
        assert.deepEqual(args.remain(), [ 'v1', 'v2', 'v3' ])
      })('v1', 'v2', 'v3', 'v4', 'v5')
    }

    done()
  })

  it('Shift arguments.', (done) => {
    {
      (function foo () {
        let args = argx(arguments)
        assert.deepEqual(args.shift(2), [ 'v1', 'v2' ])
        assert.equal(args.shift(1, 'function'), undefined)
        assert.deepEqual(args.remain(), [ {}, noop ])
        assert.equal(args.shift(), undefined)
        assert.equal(args.shift(124), undefined)
      })('v1', 'v2', {}, noop)
    }
    {
      (function foo2 () {
        let args = argx(arguments)
        assert.deepEqual(args.shift(2), [ 'v1', 'v2' ])
        assert.deepEqual(args.remain(), [ 'v3', 'v4', 'v5' ])
      })('v1', 'v2', 'v3', 'v4', 'v5')
    }

    done()
  })

  it('Use noop.', (done) => {
    assert.ifError(argx.noop())
    done()
  })

  it('Hit with multiple type.', (done) => {
    function MyFunc () {
    }

    let myFunc = new MyFunc;
    (function () {
      let args = argx(arguments)

      assert.strictEqual(args.pop('string|number'), undefined)
      assert.strictEqual(args.pop([ 'string', 'number' ]), undefined)
      assert.strictEqual(args.pop([ MyFunc, 'number' ]), myFunc)
      assert.strictEqual(args.shift([ MyFunc, 'number' ]), undefined)
      assert.strictEqual(args.shift([ 'string', 'number' ]), 'v1')
      assert.strictEqual(args.shift('string|number'), 'v2')

    })('v1', 'v2', myFunc)
    done()
  })

  it('Working with custom object.', (done) => {
    let CustomError = function (name) {
      this.name = name
    }
    CustomError.prototype = Object.create(Error.prototype)
    {
      (function acceptCustom () {
        let args = argx(arguments)
        let fn = args.shift(Function)
        assert.equal(fn.name, 'func01')
        let error = args.shift(CustomError)
        assert.equal(error.name, 'err01')
        let obj = args.pop(Object)
        assert.equal(obj.name, 'obj01')
      })(
        function func01 () {
        },
        new CustomError('err01'),
        { name: 'obj01' }
      )
    }
    {
      (function rejectCustom () {
        let args = argx(arguments)
        assert.ok(!args.pop(Function))
        assert.ok(!args.pop(CustomError))
        assert.ok(!args.pop('number'))
        assert.ok(!args.pop('string'))
        assert.ok(!args.shift('object'))
        assert.ok(!args.shift('number'))
        assert.ok(!args.shift('string'))
      })(
        function func01 () {
        },
        new CustomError('err01'),
        { name: 'obj01' }
      )
    }
    done()
  })

  it('Handle array.', (done) => {
    (function () {
      let args = argx(arguments)
      assert.equal(args.pop('string'), undefined)
      assert.equal(args.pop([]), undefined)
      assert.deepEqual(args.pop('array'), [ 'v5', 'v6' ])
      assert.equal(args.pop([]), undefined)
      assert.equal(args.pop('string'), undefined)
      assert.deepEqual(args.pop(Array), [ 'v4', 'v5' ])
    })(
      'v1',
      'v2',
      'v3',
      [ 'v4', 'v5' ],
      [ 'v5', 'v6' ]
    )
    done()
  })

  it('Handle arrays.', (done) => {
    {

      (function () {
        let args = argx(arguments)
        assert.deepEqual(args.shift('string'), undefined)
      })([ 'foo', 'bar' ])
    }
    {

      (function () {
        let args = argx(arguments)
        assert.deepEqual(args.shift('array'), [ 'foo', 'bar' ])
      })([ 'foo', 'bar' ])
    }
    {
      (function () {
        let args = argx(arguments)
        assert.deepEqual(args.shift('object'), [ 'foo', 'bar' ])
      })([ 'foo', 'bar' ])
    }
    {
      (function () {
        let args = argx(arguments)
        assert.deepEqual(args.shift(Array), [ 'foo', 'bar' ])
      })([ 'foo', 'bar' ])
    }
    done()
  })

  it('Parse type.', (done) => {

    (function () {
      let args = argx(arguments)
      assert.strictEqual(args.pop(Function), undefined)
      assert.deepEqual(args.pop(Object), { foo: 'bar' })
      assert.strictEqual(args.pop(Function), argx.noop)
      assert.strictEqual(args.shift(Number), undefined)
      assert.equal(args.shift(String), 'foo')
      assert.strictEqual(args.shift(Number), 3)
      assert.deepEqual(args.shift(Array), [ 'baz' ])
      assert.strictEqual(args.shift(Array), undefined)
    })('foo', 3, [ 'baz' ], argx.noop, { foo: 'bar' })
    done()
  })

  it('Issue #3', (done) => {
    // Test for issue #3 (https://github.com/okunishinishi/node-argx/issues/3)
    function argxGetNumberType (fn, string, number) {
      let args = argx(arguments)
      let values = {}
      values.fn = args.shift(Function)
      assert.strictEqual(args.shift(Function), undefined)
      assert.strictEqual(args.pop(Function), undefined)
      values.str = args.shift(String)
      assert.strictEqual(args.shift(String), undefined)
      assert.strictEqual(args.pop(String), undefined)
      values.numb = args.shift(Number)
      assert.strictEqual(args.shift(Number), undefined)
      assert.strictEqual(args.pop(Number), undefined)
      assert.deepEqual(args.remain(), [])
      assert.deepEqual(values, {
        fn: argxGetNumberType,
        str: 'hello',
        numb: 3
      })
    }

    argxGetNumberType(argxGetNumberType, 'hello', 3)
    done()
  })
})

/* global describe, before, after, it */
