import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config'
import config from '@antfu/eslint-config'
import { defu } from 'defu'
import { consoleRules, defaultOptions, defaultRules, lengthRules, vueRules } from './options'

export default function antfu(options?: OptionsConfig & FlatConfigItem, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]> {
  return config(
    defu(
      options,
      defaultOptions,
    ),
    defaultRules,
    vueRules,
    lengthRules,
    consoleRules,
    ...userConfigs,
  )
}
