/** @format */

const test = require('tape');
const numberDetect = require('../src/index.js');
const testMessage =
    'Simplified tests to verify that the bundled package is working';

test(testMessage, function(assert) {

    assert.plan(14);

    try {

        assert.equal(
            typeof numberDetect,
            'object',
            'The module returns an object and...'
        );

        assert.deepEqual(
            Object.keys(numberDetect),
            ['numberDetect'],
            'that object contains a single property and...'
        );
        assert.equal(
            typeof numberDetect.numberDetect,
            'function',
            'that property is a function and...'
        );

        const typeOf = numberDetect.numberDetect;

        assert.equal(typeOf(), 'undefined');
        assert.equal(typeOf(true), 'boolean');
        assert.equal(typeOf(''), 'string');
        assert.equal(typeOf(null), 'null', 'null returns "null" and...');
        assert.equal(typeOf({}), 'Object');
        assert.equal(typeOf([]), 'Array');
        assert.equal(typeOf(NaN), 'NaN');
        assert.equal(typeOf(1 / 0), 'Infinity');
        assert.equal(typeOf(-1 / 0), 'Infinity');
        assert.equal(typeOf(3.67), 'number');
        assert.equal(
            typeOf(3),
            'number',
            'that function returns the expected values.'
        );
        assert.end();

    } catch ({message}) {

        /* eslint-disable no-console */
        console.log(message);
        assert.end();

    }

});
