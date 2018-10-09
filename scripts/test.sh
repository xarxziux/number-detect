#!/usr/bin/env bash

base=$( pwd )
eslint="${base}/node_modules/.bin/eslint"
tap_dot="${base}/node_modules/.bin/tap-dot"

${eslint} "${base}/src/core/number-detect.mjs" || exit 1
${eslint} "${base}/src/index.js" || exit 1
${eslint} "${base}/test/test.js" || exit 1
node "${base}/test/test.js" | "${tap_dot}" || exit 1

exit 0
