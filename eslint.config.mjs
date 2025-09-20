import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import eslintReact from '@eslint-react/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default defineConfig(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',
      '**.d.ts',
      'vite.config.ts'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    plugins: {
      'react-hooks': reactHooksPlugin
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintReact.configs['recommended-typescript'],
  prettier
)
