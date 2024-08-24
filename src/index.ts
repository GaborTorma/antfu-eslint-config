import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import config from '@antfu/eslint-config'
import { defu } from 'defu'
import { defaultOptions, packageJsonRules, styleMaxLenRules } from './options'

export default async function antfu(options?: OptionsConfig & TypedFlatConfigItem): Promise<FlatConfigComposer<TypedFlatConfigItem>> {
  return config(
    defu(
      options,
      defaultOptions,
    ),
    packageJsonRules,
    styleMaxLenRules,
  )
}
