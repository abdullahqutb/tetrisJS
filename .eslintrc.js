module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    semi: 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn'
    // semi: ['off', 'always']
    // no-unused-vars: ['warn', 'always']
  }
}
