import { join } from 'path'
import { Configuration } from 'webpack-dev-server'
import { devServerConfigPath, srcDir, appDir } from './paths'
import { getPeaConfig } from './getPeaConfig'

export const customizeServer = () => {
  const devServerConfig = require(devServerConfigPath)

  let config: Configuration = devServerConfig()
  config.contentBase = [
    join(srcDir, '.pea', 'public'),
    join(appDir, 'public'),
  ]

  const peaConfig = getPeaConfig()

  if (peaConfig && peaConfig.devServer) {
    config = peaConfig.devServer(config)
  }

  require.cache[require.resolve(devServerConfigPath)].exports = () => {
    return config
  }
}
