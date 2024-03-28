import type { Linter } from 'eslint'
import type { FlatConfigPipeline } from 'eslint-flat-config-utils'
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import config from '@antfu/eslint-config'
import { defu } from 'defu'
import { consoleRules, defaultOptions, defaultRules, packageJsonRules, vueRules } from './options'

export default function antfu(options?: OptionsConfig & TypedFlatConfigItem, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigPipeline<any> | Linter.FlatConfig[]>[]): FlatConfigPipeline<TypedFlatConfigItem> {
  return config(
    defu(
      options,
      defaultOptions,
    ),
    defaultRules,
    vueRules,
    consoleRules,
    packageJsonRules,
    ...userConfigs,
  )
}
