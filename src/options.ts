import type { FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config'

export const defaultOptions: OptionsConfig & FlatConfigItem = {
  // https://github.com/antfu/eslint-config?tab=readme-ov-file#type-aware-rules
  typescript: {
    tsconfigPath: 'tsconfig.json',
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
  formatters: true, // https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters
}

export const vueRules: UserConfigItem = {
  files: ['**/*.vue'],
  rules: {
    // https://eslint.vuejs.org/rules/component-name-in-template-casing
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case', // https://eslint.vuejs.org/rules/component-name-in-template-casing#kebab-case
      { registeredComponentsOnly: false },
    ],
    // https://eslint.vuejs.org/rules/max-attributes-per-line
    'vue/max-attributes-per-line': ['warn', {
      singleline: 100, // https://eslint.vuejs.org/rules/max-attributes-per-line#singleline-3
      multiline: 1, // https://eslint.vuejs.org/rules/max-attributes-per-line#multiline-2
    }],
  },
}

export const lengthRules: UserConfigItem = {
  rules: {
    // https://eslint.org/docs/latest/rules/max-len
    'max-len': [
      'warn',
      {
        code: 125, // https://eslint.org/docs/latest/rules/max-len#code
        ignoreComments: true, // https://eslint.org/docs/latest/rules/max-len#ignorecomments
        ignoreTrailingComments: true, // https://eslint.org/docs/latest/rules/max-len#ignoretrailingcomments
        ignoreUrls: true, // https://eslint.org/docs/latest/rules/max-len#ignoreurls
        ignoreStrings: true, // https://eslint.org/docs/latest/rules/max-len#ignorestrings
        ignoreTemplateLiterals: true, // https://eslint.org/docs/latest/rules/max-len#ignoretemplateliterals
        ignoreRegExpLiterals: true, // https://eslint.org/docs/latest/rules/max-len#ignoreregexpliterals
        ignorePattern: true, // https://eslint.org/docs/latest/rules/max-len#ignorepattern
      },
    ],
  },
}

export const unusedVarsRules: UserConfigItem = {
  files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  rules: {
    'unused-imports/no-unused-vars': 'warn', // https://www.npmjs.com/package/eslint-plugin-unused-imports#usage
  },
}

export const consoleRules: UserConfigItem = {
  rules: {
    'no-console': 'off', // https://eslint.org/docs/latest/rules/no-console
  },
}

export const defaultRules: UserConfigItem = {
  rules: {
    // https://eslint.org/docs/latest/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false, // https://eslint.org/docs/latest/rules/object-shorthand#avoidquotes
    }],
    'ts/method-signature-style': ['error', 'method'], // https://typescript-eslint.io/rules/method-signature-style#method
  },
}
