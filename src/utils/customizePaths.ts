import { join } from 'path'
import { srcDir, reactScriptsPaths, entryPath, tmpPublicDir } from './paths'
import { getPeaConfig } from './getPeaConfig'

export const customizePaths = () => {
  const paths = require(reactScriptsPaths)

  paths.appSrc = srcDir
  paths.appIndexJs = entryPath
  paths.appPublic = tmpPublicDir

  // customize build dir
  const config = getPeaConfig()
  if (config && config.buildDir) {
    paths.appBuild = config.buildDir
  }

  if (config && config.appHtml) {
    paths.appHtml = config.appHtml
  } else {
    paths.appHtml = join(srcDir, '.pea', 'public', 'index.html')
  }

  require(reactScriptsPaths)
  require.cache[require.resolve(reactScriptsPaths)].exports = paths
}
