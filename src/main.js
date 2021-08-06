import typeDetect from 'type-detect'

/* eslint-disable no-self-compare */
const isNaN = x => x !== x
/* eslint-enable no-self-compare */

const breakdownNumber = x =>
  isNaN(x) ? 'NaN' : !isFinite(x) ? 'Infinity' : 'number'

const breakdownObject = x => (x === null ? 'null' : typeDetect(x))

const hashTable = {
  number: breakdownNumber,
  object: breakdownObject
}

export const numberDetect = x => {
  const xType = typeof x

  return hashTable[xType] ? hashTable[xType](x) : xType
}
