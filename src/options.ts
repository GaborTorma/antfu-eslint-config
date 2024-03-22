import type { FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config'

export const defaultOptions: OptionsConfig & FlatConfigItem = {
  // https://github.com/antfu/eslint-config?tab=readme-ov-file#type-aware-rules
  typescript: {
    tsconfigPath: 'tsconfig.json',
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
    overrides: {
      // https://www.npmjs.com/package/eslint-plugin-unused-imports#usage
      'unused-imports/no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
      ],
    },
  },
  javascript: {
    overrides: {
      // https://www.npmjs.com/package/eslint-plugin-unused-imports#usage
      'unused-imports/no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
      ],
    },
  },
  formatters: true, // https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters
  stylistic: {
    overrides: {
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
        ignorePattern: `^(\\s+|export\\s(default\\s)?)function`, // https://eslint.style/rules/js/max-len#ignorepattern
      }],
    },
  },
}

export const vueRules: UserConfigItem = {
  files: ['**/*.vue'],
  rules: {
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

export const packageJsonRules: UserConfigItem = {
  files: ['package.json'],
  rules: {
    'style/eol-last': 'off',
  },
}
