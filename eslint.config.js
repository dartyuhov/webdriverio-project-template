import globals from 'globals';
import pluginJs from '@eslint/js';
import wdioPlugin from 'eslint-plugin-wdio';
import babelParser from '@babel/eslint-parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        browser: false,
        describe: false,
        it: false,
        before: false,
        after: false,
        beforeEach: false,
        afterEach: false,
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            ['@babel/preset-env', { targets: 'maintained node versions' }],
          ],
          plugins: ['@babel/plugin-syntax-import-assertions'],
        },
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      wdio: wdioPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...wdioPlugin.configs.recommended.rules,
      'no-unused-vars': [
        'warn',
        {
          args: 'none',
          varsIgnorePattern: '^(error|result|duration|retries|browser)$',
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
];
