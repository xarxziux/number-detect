'use strict';

import typeDetect from 'type-detect';

/* eslint-disable no-self-compare */
const isNaN = x => x !== x;
/* eslint-enable no-self-compare */

const breakdownNumber = x => (
    
    /* eslint-disable indent */
    (isNaN (x))
        ? 'NaN'
        : (!isFinite (x))
        ? 'Infinity'
        : 'number'
    /* eslint-disable indent */
    
);

const breakdownObject = x => (
    
    (x === null)
        ? 'null'
        : typeDetect (x)
    
);

const hashTable = {
    
    number: breakdownNumber,
    object: breakdownObject
    
};

const numberDetect = x => {
    
    const xType = typeof x;
    
    return ((hashTable [xType])
        ? hashTable [xType](x)
        : xType);
    
};

export default numberDetect;
