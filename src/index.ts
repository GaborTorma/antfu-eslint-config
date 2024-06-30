import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import config from '@antfu/eslint-config'
import { defu } from 'defu'
import { consoleRules, defaultOptions, defaultRules, packageJsonRules } from './options'

export default async function antfu(options?: OptionsConfig & TypedFlatConfigItem, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any> | Linter.FlatConfig[]>[]): Promise<FlatConfigComposer<TypedFlatConfigItem>> {
  return config(
    defu(
      options,
      defaultOptions,
    ),
    defaultRules,
    consoleRules,
    packageJsonRules,
    ...userConfigs,
  )
}
