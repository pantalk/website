import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      'react/button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'import/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
          pattern: {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'always',
            yaml: 'always',
            svg: 'always',
            css: 'always',
            ttf: 'always',
            woff: 'always',
            woff2: 'always',
          },
        },
      ],
      '@next/next/no-img-element': 'off',
      'no-undef': 'error',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks:
            '(useFunctionHandler|useFunctionDispatch|useAborter|useDeps)',
        },
      ],
    },
  },
  globalIgnores(['.next/**', 'public/**', 'next-env.d.ts']),
])
