import fs from 'fs-extra'
import { tmpPeaConfigPath } from './paths'
import { Configuration } from '../typings/configuration'

export function getPeaConfig(): null | Configuration {
  if (!fs.existsSync(tmpPeaConfigPath)) return null
  const peaConfig = require(tmpPeaConfigPath)
  if (peaConfig.default) {
    return peaConfig.default
  }
  return null
}
