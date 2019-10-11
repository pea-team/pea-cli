import { rmTmpDir } from './rmTmpDir'
import { createPeaConfig } from './createPeaConfig'
import { customizeAppInfo } from './customizeAppInfo'
import { createEntryFile } from './createEntryFile'
import { createPublicFiles } from './createPublicFiles'
import { createCommonFiles } from './createCommonFiles'
import { createConfigFile } from './createConfigFile'
import { initPlugin } from './initPlugin'

export async function prepare() {
  rmTmpDir()
  createPeaConfig()

  // const result = initPlugin()
  initPlugin()

  // create file
  // createEntryFile(result.entryText)
  createEntryFile()
  createPublicFiles()
  createCommonFiles()
  createConfigFile()

  customizeAppInfo()
}
