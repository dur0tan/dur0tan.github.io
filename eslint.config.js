import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // export default [
  { ignores: ['dist', 'docs'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    // files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // parserOptions: {
      //   ecmaVersion: 'latest',
      //   ecmaFeatures: { jsx: true },
      //   sourceType: 'module',
      // },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      // react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    // rules: {
    //   ...js.configs.recommended.rules,
    //   ...react.configs.recommended.rules,
    //   ...react.configs['jsx-runtime'].rules,
    //   ...reactHooks.configs.recommended.rules,
    //   'react/jsx-no-target-blank': 'off',
    //   'react-refresh/only-export-components': [
    //     'warn',
    //     { allowConstantExport: true },
    //   ],
    // },
  }
);
// ]
