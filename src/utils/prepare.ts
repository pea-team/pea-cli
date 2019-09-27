import { rmTmpDir } from './rmTmpDir'
import { createPeaConfig } from './createPeaConfig'
import { customizeAppInfo } from './customizeAppInfo'
import { createEntryFile } from './createEntryFile'
import { createPublicFiles } from './createPublicFiles'
import { createCommonFiles } from './createCommonFiles'
import { createConfigFile } from './createConfigFile'
import { createRouterConfig } from './createRouterConfig'
import { createModalConfig } from './createModalConfig'
import { createDrawerConfig } from './createDrawerConfig'
import { createLocaleTypings } from './createLocaleTypings'
import { createLocalesFiles } from './createLocalesFiles'
import { createInterceptorFiles } from './createInterceptorFiles'

export async function prepare() {
  rmTmpDir()
  createPeaConfig()


  // create file
  createEntryFile()
  createPublicFiles()
  createCommonFiles()
  createConfigFile()
  createRouterConfig()
  createModalConfig()
  createDrawerConfig()
  createLocalesFiles()

  await createLocaleTypings()
  createInterceptorFiles()

  customizeAppInfo()
}
