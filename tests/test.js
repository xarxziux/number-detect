import test from 'tape'
import { numberDetect as typeOf } from '../src/main.js'

const testMessage = 'Simplified tests to verify that the bundled package is working'

test(testMessage, function (assert) {
  assert.plan(12)

  try {
    assert.equal(
      typeof typeOf,
      'function',
      'The module returns a function and...'
    )

    assert.equal(typeOf(), 'undefined')
    assert.equal(typeOf(true), 'boolean')
    assert.equal(typeOf(''), 'string')
    assert.equal(typeOf(null), 'null', 'null returns "null" and...')
    assert.equal(typeOf({}), 'Object')
    assert.equal(typeOf([]), 'Array')
    assert.equal(typeOf(NaN), 'NaN')
    assert.equal(typeOf(1 / 0), 'Infinity')
    assert.equal(typeOf(-1 / 0), 'Infinity')
    assert.equal(typeOf(3.67), 'number')
    assert.equal(
      typeOf(3),
      'number',
      'that function returns the expected values.'
    )

    assert.end()
  } catch ({ message }) {
    /* eslint-disable no-console */
    console.log(message)
    assert.end()
  }
})
