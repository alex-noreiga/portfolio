#!/usr/bin/env sh

. "$(dirname -- "$0")/_/husky.sh"

# Add permissions to all husky scripts
chmod ug+x .husky/*
chmod ug-x .husky/.gitignore 2>/dev/null || true

# Setup husky
npm pkg set scripts.prepare="husky"
