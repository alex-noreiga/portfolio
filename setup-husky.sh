#!/usr/bin/env sh

# Install husky
npm install husky --save-dev

# Create .husky directory if it doesn't exist
mkdir -p .husky

# Initialize husky
npx husky init

# Make pre-commit script executable
chmod +x .husky/pre-commit

echo "Husky initialized successfully!"
