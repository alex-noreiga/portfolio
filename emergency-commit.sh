#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
    echo "Usage: npm run emergency-commit \"commit message\""
    exit 1
fi

# Temporarily disable hooks
sh ./disable-hooks.sh

# Add all files, commit, and push
git add .
git commit -m "$1"

# Re-enable hooks
sh ./enable-hooks.sh

echo "Emergency commit completed successfully."
