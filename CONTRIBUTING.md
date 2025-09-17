# Contributing Guidelines

## Pre-commit Requirements

This repository enforces strict quality checks before allowing commits. **All
commits are blocked if there are ANY linting errors, warnings, or test
failures.**

### Automatic Checks

Before each commit, the following checks run automatically:

1. **📋 TypeScript Type Checking**
   - Must pass with zero errors
   - Command: `npm run type-check`

2. **🔧 ESLint (Strict Mode)**
   - Must pass with zero errors AND zero warnings
   - Command: `npm run lint -- --max-warnings 0`

3. **🧪 Tests**
   - All tests must pass
   - Command: `npm test run`

4. **💅 Code Formatting**
   - Prettier auto-formats staged files
   - Command: `npx lint-staged`

### Manual Quality Check

Run this command to verify your code before committing:

```bash
npm run pre-commit-check
```

### Bypassing Hooks (Emergency Only)

**⚠️ WARNING: Only use in emergencies!**

```bash
git commit --no-verify -m "emergency fix"
```

### Common Issues

#### ESLint Warnings

- Fix all warnings before committing
- Use `npm run lint:fix` to auto-fix where possible
- For complex issues, refactor code to meet standards

#### Test Failures

- Fix failing tests before committing
- Add tests for new functionality
- Ensure 100% test pass rate

#### TypeScript Errors

- Fix all type errors before committing
- Use proper typing instead of `any`
- Ensure strict type safety

### AI/LLM Usage Guidelines

When using Claude Code or other AI tools:

1. **Never use `--no-verify`** unless it's a true emergency
2. **Always run `npm run pre-commit-check`** before asking AI to commit
3. **Fix all quality issues** before proceeding with commits
4. **Review AI-generated code** for quality and correctness

### Development Workflow

1. Make your changes
2. Run `npm run pre-commit-check` to verify quality
3. Fix any issues found
4. Commit your changes (hooks will run automatically)
5. Push to repository

This ensures consistent, high-quality code across the entire codebase.
