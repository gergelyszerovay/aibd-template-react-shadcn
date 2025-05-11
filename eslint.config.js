import js from '@eslint/js';
import eslintPluginPathBoundaryImports from '@gergelyszerovay/eslint-plugin-path-boundary-imports';
import sheriff from '@softarc/eslint-plugin-sheriff';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      sheriff.configs.all,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      path: eslintPluginPathBoundaryImports,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      "@typescript-eslint/no-unused-vars": [
      "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      'path/enforce-import-pattern': [
        'error',
        {
          levels: 2,
        },
      ],
      "import/no-default-export": "error"
    },
    settings: {
      'path': {
        'config': 'tsconfig.app.json',
      },
    },
  },
);
