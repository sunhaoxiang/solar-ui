module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@antfu/eslint-config-react',
  ],
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'testing-library', 'jest-dom'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'antfu/top-level-function': 'off',
  },
}
