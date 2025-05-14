# Portfolio Project

This is my portfolio website built with React.

[![Portfolio CI/CD](https://github.com/alex-noreiga/portfolio/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/alex-noreiga/portfolio/actions/workflows/ci-cd.yml)

## Development Workflow

This project uses a modern development workflow with linting, testing, and CI/CD integration.

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up Git hooks (one-time setup)
npm run setup-husky
```

### Available Scripts

```bash
# Start development server
npm start

# Run tests
npm test

# Run tests with coverage
npm run test:ci

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Analyze bundle size
npm run analyze
```

### Code Quality Tools

This project uses the following tools to ensure code quality:

- **ESLint**: JavaScript and React linting
- **Prettier**: Code formatting
- **Jest and React Testing Library**: Unit and component testing
- **Husky**: Git hooks for pre-commit validation
- **lint-staged**: Run linters on git staged files

### Git Workflow

1. Create a feature branch from main

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them (linting and tests will run automatically)

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push your branch and create a pull request

   ```bash
   git push origin feature/your-feature-name
   ```

4. Wait for CI checks to pass and then merge

### Working with Git Hooks

This project uses Husky for Git hooks. Here are helpful commands:

```bash
# Temporarily disable Git hooks (useful when you need to make quick changes)
npm run disable-hooks

# Re-enable Git hooks
npm run enable-hooks

# Make an emergency commit (bypasses all hooks)
npm run emergency-commit "fix: urgent hotfix"
```

### Continuous Integration & Deployment

This project uses GitHub Actions for CI/CD:

- On every push to main and pull request, the workflow:
  - Builds the project
  - Runs linting
  - Runs tests
  - Deploys to GitHub Pages (only on push to main)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
