import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const appDir = path.resolve(fs.realpathSync(process.cwd()))

export const tmpDir = `${appDir}/.pea`
export const tmpConfigDir = `${tmpDir}/config`

export const peaConfigPath = `${appDir}/pea.config.ts`
export const tmpPeaConfigPath = `${tmpDir}/pea.config.js`

export const pagesDir = `${appDir}/pages`
export const pageFiles = `${appDir}/pages/**/*.{ts,tsx}`

export const modalsDir = `${appDir}/modals`
export const modalFiles = `${appDir}/modals/**/*.{ts,tsx}`

export const configPaths = [
  {
    origin: `${appDir}/config/config.local.ts`,
    target: `${tmpDir}/config/config.local.ts`,
  },
  {
    origin: `${appDir}/config/config.default.ts`,
    target: `${tmpDir}/config/config.default.ts`,
  },
  {
    origin: `${appDir}/config/config.prod.ts`,
    target: `${tmpDir}/config/config.prod.ts`,
  },
]

export const interceptorPaths = [
  {
    origin: `${appDir}/interceptors/response.ts`,
    target: `${tmpDir}/interceptors/response.ts`,
  },
  {
    origin: `${appDir}/interceptors/responseError.ts`,
    target: `${tmpDir}/interceptors/responseError.ts`,
  },
  {
    origin: `${appDir}/interceptors/request.ts`,
    target: `${tmpDir}/interceptors/request.ts`,
  },
  {
    origin: `${appDir}/interceptors/requestError.ts`,
    target: `${tmpDir}/interceptors/requestError.ts`,
  },
]

export const tmpCommonDir = `${tmpDir}/common`
export const commonDir = `${appDir}/common`
export const commonFiles = `${appDir}/common/**/*.{ts,tsx}`
export const commonPaths = [
  {
    name: 'App.tsx',
    origin: `${appDir}/common/App.tsx`,
    target: `${tmpDir}/common/App.tsx`,
  },
  {
    name: 'Modal.tsx',
    origin: `${appDir}/common/Modal.tsx`,
    target: `${tmpDir}/common/Modal.tsx`,
  },
]

export const devConfigPath = `${appDir}/config/config.dev.ts`
export const tmpDevConfigPath = `${tmpDir}/config/config.dev.ts`
export const tmpProdConfigPath = `${tmpDir}/config/config.prod.ts`

export const routerConfigPath = `${appDir}/config/router.config.ts`
export const tmpRouterConfigPath = `${tmpDir}/config/router.config.ts`

export const modalConfigPath = `${appDir}/config/modal.config.ts`
export const tmpModalsConfigPath = `${tmpDir}/config/modal.config.ts`

export const entryPath = `${tmpDir}/index.tsx`
export const htmlPath = `${tmpDir}/index.html`
export const publicDir = `${tmpDir}/public`

export const localesDir = `${appDir}/locales`
export const tmpLocalesDir = `${tmpDir}/locales`
export const defaultLocalePath = `${appDir}/locales/default.json`
export const tmpDefaultLocalePath = `${tmpDir}/locales/default.json`
export const localeFiles = `${appDir}/locales/**/*.json`
export const localeTypingsPath = path.join(
  appDir,
  'node_modules',
  'pea-i18n',
  'dist',
  'typings.d.ts',
)

export const interceptorsDir = `${appDir}/interceptors`
export const tmpInterceptorsDir = `${tmpDir}/interceptors`

export const tscScript = path.join(appDir, 'node_modules', '.bin', 'tsc')

export const reactScripts = path.join(appDir, 'node_modules', '.bin', 'react-scripts')

const reactScriptsModulePath = 'react-scripts'

const webpackConfigPath = `${reactScriptsModulePath}/config/webpack.config`
const devServerConfigPath = `${reactScriptsModulePath}/config/webpackDevServer.config`

const reactScriptsPaths = `${reactScriptsModulePath}/config/paths`

export { reactScriptsModulePath, webpackConfigPath, devServerConfigPath, reactScriptsPaths }
