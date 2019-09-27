import fs from 'fs-extra'
import { getPeaConfig } from './getPeaConfig'
import { tmpHtmlPath } from './paths'

export const customizeAppInfo = () => {
  const config = getPeaConfig()

  const title = config && config.title ? config.title : 'Pea App'

  const appHtml = config && config.appHtml ? config.appHtml : tmpHtmlPath
  // set Title
  const htmlString = fs.readFileSync(appHtml, { encoding: 'utf8' })
  fs.writeFileSync(tmpHtmlPath, htmlString.replace('%TITLE%', title), { encoding: 'utf8' })
}
