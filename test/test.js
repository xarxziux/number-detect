import test from 'tape';
import {numberDetect} from './number-detect.js';

test ('Basic tests', function (assert) {
    
    const failFn = () => '__fail__';
    const typeOf = (typeof numberDetect === 'function') ?
        numberDetect :
        failFn;
    
    assert.plan (14);
    assert.equal (typeof typeOf, 'function',
        'The module returns a function and...');
    assert.equal (typeOf (), 'undefined');
    assert.equal (typeOf (true), 'boolean');
    assert.equal (typeOf (''), 'string');
    assert.equal (typeOf (failFn), 'function',
        'the basic types return the expected values and...');
    assert.equal (typeOf (null), 'null',
        'null returns "null" and');
    assert.equal (typeOf ({}), 'Object');
    assert.equal (typeOf ([]), 'Array');
    /* eslint-disable no-new-wrappers */
    assert.equal (typeOf (new String()), 'String',
        'objects types are passed to the type-detect library and...');
    /* eslint-enable no-new-wrappers */
    assert.equal (typeOf (NaN), 'NaN');
    assert.equal (typeOf (1 / 0), 'Infinity');
    assert.equal (typeOf (-1 / 0), 'Infinity');
    assert.equal (typeOf (3.67), 'number');
    assert.equal (typeOf (3), 'number',
        'number types return the expected values.');
    assert.end();
    
});
