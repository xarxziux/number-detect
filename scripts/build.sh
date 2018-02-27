#!/bin/bash

# Exit on error
set -e

# Check the syntax
eslint ./src/number-detect.js
eslint ./test/test.js

# Increment the build number
build_num="$(<build_number)"
build_num="$((build_num + 1))"
echo -n "${build_num}" > build_number

# Create the ES5 version
babel ./src/number-detect.js -o ./tmp/number-detect.js
babel ./test/test.js -o ./tmp/test.js

# Run tests
node ./tmp/test.js | tap-dot

# Create the minimised version
uglifyjs ./tmp/number-detect.js -c -m -o ./dist/number-detect.min.js

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
