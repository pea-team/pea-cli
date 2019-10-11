import { rmTmpDir } from './rmTmpDir'
import { createPeaConfig } from './createPeaConfig'
import { customizeAppInfo } from './customizeAppInfo'
import { createEntryFile } from './createEntryFile'
import { createPublicFiles } from './createPublicFiles'
import { createConfigFile } from './createConfigFile'
import { createAppFile } from './createAppFile'
import { initPlugin } from './initPlugin'

export async function prepare() {
  rmTmpDir()
  createPeaConfig()
  createAppFile()

  initPlugin()

  createEntryFile()
  createPublicFiles()
  createConfigFile()

  customizeAppInfo()
}
