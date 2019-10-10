import { rmTmpDir } from './rmTmpDir'
import { createPeaConfig } from './createPeaConfig'
import { createPluginConfig } from './createPluginConfig'
import { customizeAppInfo } from './customizeAppInfo'
import { createEntryFile } from './createEntryFile'
import { createPublicFiles } from './createPublicFiles'
import { createCommonFiles } from './createCommonFiles'
import { createConfigFile } from './createConfigFile'
import { initPlugin } from './initPlugin'

export async function prepare() {
  rmTmpDir()
  createPeaConfig()
  createPluginConfig()

  const result = initPlugin()

  // create file
  createEntryFile(result.entryText)
  createPublicFiles()
  createCommonFiles()
  createConfigFile()

  customizeAppInfo()
}
