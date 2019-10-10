import { formatCode } from './formatCode'

export const entryText = `
import Pea, { Config } from '../core'
import userConfig from './config/config'
import pluginConfig from './plugin'
import App from './common/App'

const config = {
  root: '#root',
  app: App,
} as Config

const finalConfig = {
  ...config,
  ...userConfig,
} as Config

async function init() {
  await Pea.bootstrap(finalConfig, pluginConfig)
}

init()
`

const config = formatCode(`
const config = {
}
export default config
`)

export default {
  entry: entryText,
  config,
}
