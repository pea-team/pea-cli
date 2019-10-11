import { getPeaConfig } from './getPeaConfig'

import texts from './texts'


// not handle updateWebpackConfig
export function initPlugin() {

  const peaConfig = getPeaConfig()
  const { codes } = texts

  if (!peaConfig || !peaConfig.plugins) return null

  const plugins: any[] = peaConfig.plugins

  for (const item of plugins) {
    if (item.beforeCompile) item.beforeCompile()

    if (item.addImportCode) {
      codes.afterImportCodes.push(item.addImportCode())
    }

    if (item.addBootstrapCode) {
      codes.beforeBootstrapCodes.push(item.addBootstrapCode())
    }

    if (item.addRenderCode) {
      codes.renderCodes.push(item.addRenderCode())
    }
  }
}
