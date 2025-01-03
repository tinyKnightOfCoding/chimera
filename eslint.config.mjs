import eslint from '@eslint/js'
import tslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default tslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    ignores: ['coverage', '**/public', '**/dist', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'eslint.config.mjs'],
  },
  eslint.configs.recommended,
  tslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  prettier,
)
