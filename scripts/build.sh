#!/bin/bash

# Exit on error
set -e

# Check the syntax and run tests
eslint ./src/number-detect.mjs
eslint ./test/prebuild.js
eslint ./test/postbuild.js

node --experimental-modules ./test/prebuild.mjs | tap-dot

# Increment the build number
build_num="$(<build_number)"
build_num="$((build_num + 1))"
echo -n "${build_num}" > build_number

# Create the minimised version
babel ./src/number-detect.mjs --out-file ./tmp/number-detect.js
uglifyjs ./tmp/number-detect.js --compress --mangle \
    --output ./dist/number-detect.min.js

node ./test/postbuild.js | tap-dot

# Ask for a commit message
echo
echo Compilation successful.  Please enter a commit message.
echo An empty string skips this step.
echo Have you updated the Change Log?
read -p "> " commit_msg

# If no commit message, run "git add -A" and exit
if test -z "${commit_msg}"
then
    git add -A
    exit 0
fi

# If there is a commit message, update
# the version number and commit
version_num="$(grep version package.json | \
        grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+')"
commit_str="${version_num}.${build_num}: ${commit_msg}"
npm --no-git-tag-version version patch
git add -A
git commit -m "${commit_str}"

exit 0
