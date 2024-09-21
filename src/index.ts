import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import config from '@antfu/eslint-config'
import { defu } from 'defu'
import { defaultOptions, packageJsonRules, styleMaxLenRules } from './options'

// eslint-disable-next-line ts/promise-function-async
export default function antfu(options?: OptionsConfig & Omit<TypedFlatConfigItem, 'files'>, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  return config(
    defu(
      options,
      defaultOptions,
    ),
    packageJsonRules,
    styleMaxLenRules,
    ...userConfigs,
  )
}
