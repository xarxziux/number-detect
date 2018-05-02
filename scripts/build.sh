#!/bin/bash

# Exit on error
set -e

<<<<<<< HEAD
# Check the syntax and run tests
eslint ./src/number-detect.js
eslint ./test/test.js
node ./test/test.js | tap-dot
=======
# Check the syntax
eslint ./src/number-detect.js
eslint ./test/test.js
>>>>>>> github

# Increment the build number
build_num="$(<build_number)"
build_num="$((build_num + 1))"
echo -n "${build_num}" > build_number

<<<<<<< HEAD
# Create the minimised version
babel --presets es2015 ./src/number-detect.js \
    -o ./tmp/number-detect.babel.js
uglifyjs ./tmp/number-detect.babel.js -c -m \
    -o ./bin/number-detect.min.js

# Ask for a commit message
echo 
=======
# Create the ES5 version
node ./scripts/build.js

# Run tests
node ./test/test.js | tap-dot

# Ask for a commit message
echo
>>>>>>> github
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
<<<<<<< HEAD
version_num="$(cat package.json | \
        grep version | \
=======
version_num="$(grep version package.json | \
>>>>>>> github
        grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+')"
commit_str="${version_num}.${build_num}: ${commit_msg}"
npm --no-git-tag-version version patch
git add -A
git commit -m "${commit_str}"
exit 0
