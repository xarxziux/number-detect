# NUMBER-DETECT CHANGE LOG #

## 2018-03-09

### Changed
- build.sh: moved main build process to a separate Node script for simplicity.
- package.json, build.sh: removed uglify-js dependency and build step as that should be done by the consuming project.
- test.js: converted test script to CommonJS syntax.
- number-detect.js: removed unnecessary parentheses.

### Added
- build.js: added Node build script.
- test/.eslintrc.js, scripts/.eslintrc.js: added custom Node-enabled ESLint config to test and script directories.

## 2018-02-14

### Changed
- build.sh: updated build script to accommodate new target name and switch from babel-preset-2015 to babel-preset-env.
- .npmignore: included main source file.
- package.json: added "module" property.
- package.json: replaced babel-preset-2015 with babel-preset-env.
- Renamed bin folder as dist.

### Added
- .babelrc: added Babel config file.

## 2018-02-14

### Changed
- build.sh: altered the sequence to fit the ES6 conversion by having the tests run after the test file has been compiled to ES5.
- test.js: converted test file to ES6 syntax and changed the expected location of the source file.
- number-detect.js: converted main module to ES6 syntax.

## 2018-01-02

### Changed
- build.sh: removed unnecessary cat statement.
- number-detect.js: Changed the exports statement to export a function within an object, which works better with ES6 imports.

## 2017-08-03

### Changed
- Removed Babel from the build workflow and depedency list.
- Rewrote project using ES6 syntax.
- Replaced branching logic with a hash table.
- Replaced JSHint with ESLint.
- Re-organised directory structure to have src/ tmp/ bin/ and scripts/ folders instead of the previous flat structure.
- Added Babel and Browserify dependencies.

## 2017-04-22

## Changed
- .npmignore: added extra rules to remove non-production files.
- number-detect.js: typo corrections.

## 2017-04-14
- Initial commit
