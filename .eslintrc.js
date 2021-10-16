const warn = 'warn'
const never = 'never'

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    semi: [warn, never],
    quotes: [warn, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    'no-console': [warn],
    'indent': [warn, 2]
  }
}
