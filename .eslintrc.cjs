/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'perfectionist'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    'perfectionist/sort-array-includes': 'warn',
    'perfectionist/sort-exports': 'warn',
    'perfectionist/sort-imports': 'warn',
    'perfectionist/sort-named-exports': 'warn',
    'perfectionist/sort-named-imports': 'warn',
    'perfectionist/sort-svelte-attributes': [
      'warn',
      {
        'custom-groups': {
          this: 'this',
          'bind-this': 'bind:this',
          class: 'class',
          'bind-directives': 'bind:*',
          'use-directives': 'use:*'
        },
        groups: [
          ['this', 'bind-this'],
          'class',
          'unknown',
          'svelte-shorthand',
          'multiline',
          ['bind-directives', 'use-directives']
        ]
      }
    ],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
};
