#!/bin/bash

# Temporarily disable Husky hooks
git config core.hooksPath /dev/null

echo "Git hooks temporarily disabled. To re-enable, run:"
echo "npm run enable-hooks"
