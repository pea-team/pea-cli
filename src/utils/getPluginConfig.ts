import fs from 'fs-extra'
import { pluginConfigPath } from './paths'

type Configuration = Array<{
  package?: string
  dir?: string
  register: any
}>

export function getPluginConfig(): null | Configuration {
  if (!fs.existsSync(pluginConfigPath)) return null
  try {
    const config = require(pluginConfigPath).default
    if (!config) return null
    return config
  } catch {
    return null
  }
}
