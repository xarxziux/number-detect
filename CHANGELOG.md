<!-- @format -->

# NUMBER-DETECT CHANGE LOG

## 2018-05-16

### Changed

*   package.json: fixed the name of the file being called by the test script.

## 2018-05-16

### Changed

*   number-detect.mjs: renamed main source file to .mjs to facilitate direct running in Node.
*   build.sh: redesigned simplified build script using only Babel and UglifyJS.
*   Incorporated Prettier library.

### Added

*   prebuild-tests.js, postbuild-tests.js: split tests into pre- and postbuild, using ES6 and commonJS syntax respectively.

## 2017-08-03

### Changed

*   Removed Babel from the build workflow and dependency list.
*   Rewrote project using ES6 syntax.
*   Replaced branching logic with a hash table.
*   Replaced JSHint with ESLint.
*   Re-organised directory structure to have src/ tmp/ bin/ and scripts/ folders instead of the previous flat structure.
*   Added Babel and Browserify dependencies.

## 2017-04-22

## Changed

*   .npmignore: added extra rules to remove non-production files.
*   number-detect.js: typo corrections.

## 2017-04-14

*   Initial commit
