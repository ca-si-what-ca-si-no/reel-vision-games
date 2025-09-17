// Development ESLint config - allows warnings for faster development
const baseConfig = require('./eslint.config.js');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    // Reduce some strict rules for development
    'max-lines-per-function': ['warn', { max: 100 }],
    'no-magic-numbers': 'warn',
    complexity: ['warn', { max: 15 }],
    'no-console': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'consistent-return': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-deprecated': 'warn',
    'react-refresh/only-export-components': 'warn',
    'security/detect-object-injection': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'no-nested-ternary': 'warn',
    'no-empty-function': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-deprecated': 'warn',
    'unicorn/explicit-length-check': 'warn',
  },
};
