import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

export const defaultOptions: OptionsConfig & TypedFlatConfigItem = {
  // https://github.com/antfu/eslint-config?tab=readme-ov-file#type-aware-rules
  typescript: {
    tsconfigPath: 'tsconfig.json',
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
    overrides: {
      'ts/method-signature-style': ['error', 'method'], // https://typescript-eslint.io/rules/method-signature-style#method
    },
    overridesTypeAware: {
      'ts/strict-boolean-expressions': 'off', // https://typescript-eslint.io/rules/strict-boolean-expressions
    },
  },
  vue: {
    overrides: {
      // https://eslint.vuejs.org/rules/component-name-in-template-casing
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase', // https://eslint.vuejs.org/rules/component-name-in-template-casing#pascalcase
        {
          registeredComponentsOnly: false, // https://eslint.vuejs.org/rules/component-name-in-template-casing#registeredcomponentsonly
          ignores: ['/^v-/'], // ignore vuetify components // https://eslint.vuejs.org/rules/component-name-in-template-casing#ignores
        },
      ],
      // https://eslint.vuejs.org/rules/max-attributes-per-line
      'vue/max-attributes-per-line': ['warn', {
        singleline: 100, // https://eslint.vuejs.org/rules/max-attributes-per-line#singleline-3
        multiline: 1, // https://eslint.vuejs.org/rules/max-attributes-per-line#multiline-2
      }],
    },
  },
  javascript: {
    overrides: {
      // https://www.npmjs.com/package/eslint-plugin-unused-imports#usage
      'unused-imports/no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
      ],
      'object-shorthand': ['error', 'always', {
        avoidQuotes: false, // https://eslint.org/docs/latest/rules/object-shorthand#avoidquotes
      }],
      'no-console': 'off', // https://eslint.org/docs/latest/rules/no-console
    },
  },
  formatters: true, // https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters
  pnpm: true, // https://www.npmjs.com/package/eslint-plugin-pnpm
}

export const styleMaxLenRules: TypedFlatConfigItem = {
  name: 'gabortorma/style/max-len',
  files: ['**/*.?([cm])js', '**/*.?([cm])jsx', '**/*.?([cm])ts', '**/*.?([cm])tsx', '**/*.vue'],
  rules: {
    // https://eslint.style/rules/js/max-len
    'style/max-len': ['warn', {
      code: 125, // https://eslint.style/rules/js/max-len#code
      tabWidth: 2, // https://eslint.style/rules/js/max-len#tabwidth
      ignoreComments: true, // https://eslint.style/rules/js/max-len#ignorecomments
      ignoreTrailingComments: true, // https://eslint.style/rules/js/max-len#ignoretrailingcomments
      ignoreUrls: true, // https://eslint.style/rules/js/max-len#ignoreurls
      ignoreStrings: true, // https://eslint.style/rules/js/max-len#ignorestrings
      ignoreTemplateLiterals: true, // https://eslint.style/rules/js/max-len#ignoretemplateliterals
      ignoreRegExpLiterals: true, // https://eslint.style/rules/js/max-len#ignoreregexpliterals
      ignorePattern: `^(\\s+|export\\s(default\\s)?(async\\s)?)function`, // https://eslint.style/rules/js/max-len#ignorepattern
    }],
  },
}

export const packageJsonRules: TypedFlatConfigItem = {
  name: 'gabortorma/package-json/off/eol-last',
  files: ['package.json'],
  rules: {
    'style/eol-last': 'off', // https://eslint.style/rules/js/eol-last
  },
}

export const offStrictBooleanExpression: TypedFlatConfigItem = {
  name: 'off/strict-boolean-expression',
  rules: {
    'ts/strict-boolean-expressions': 'off',
  },
}
