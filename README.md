<!-- @format -->

# NUMBER-DETECT

This library is a thin wrapper around the type-detect library, and began life as a [rejected pull request](https://github.com/chaijs/type-detect/pull/92) for that library.

The library exposes a single function - numberDetect - which follows this logic:

1.  If the typeof the parameter passed is not equal to 'object' or 'number' return the typeof.
2.  If the typeof is 'object' and that object is null, return 'null', otherwise pass it to the type-detect library.
3.  If the typeof is 'number', sub-divide that type into 'NaN', 'Infinity', and 'number'.

The type-detect library only deals with 'object' typeofs and simply returns everything else, but for my uses, typeof 'number' is not useful given that typeof NaN, Infinity, and -Infinity all return 'number'. This library aims to fix that by returning a more meaningful result.

## Installation

```Bash
npm install --save number-detect
```
