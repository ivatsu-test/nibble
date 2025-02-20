import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);

const compat = new FlatCompat({
  baseDirectory: dirname(filename),
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'airbnb', 'airbnb/hooks'),
  {
    languageOptions: {
      globals: {
        React: true,
      },
    },
    rules: {
      'import/extensions': [
        1,
        'ignorePackages',
        {
          pattern: {
            tsx: 'never',
            ts: 'never',
          },
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default eslintConfig;
