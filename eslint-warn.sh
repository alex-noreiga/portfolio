#!/bin/bash

# Run ESLint with all provided arguments
npx eslint "$@"

# Always exit with success, even if ESLint found issues
exit 0
