import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const appDir = path.resolve(fs.realpathSync(process.cwd()))
export const srcDir = path.resolve(fs.realpathSync(process.cwd()), 'src')

export const tmpDir = `${srcDir}/.pea`
export const tmpConfigDir = `${tmpDir}/config`

export const peaConfigPath = `${appDir}/pea.config.ts`
export const tmpPeaConfigPath = `${tmpDir}/pea.config.js`

export const pagesDir = `${srcDir}/pages`
export const pageFiles = `${srcDir}/pages/**/*.{ts,tsx}`

export const modalsDir = `${srcDir}/modals`
export const modalFiles = `${srcDir}/modals/**/*.{ts,tsx}`

export const drawersDir = `${srcDir}/drawers`
export const drawerFiles = `${srcDir}/drawers/**/*.{ts,tsx}`

export const configPaths = [
  {
    origin: `${srcDir}/config/config.ts`,
    target: `${tmpDir}/config/config.ts`,
  },
]

export const interceptorFiles = `${srcDir}/interceptors/**/*.{ts,tsx}`
export const interceptorPaths = [
  {
    origin: `${srcDir}/interceptors/response.ts`,
    target: `${tmpDir}/interceptors/response.ts`,
  },
  {
    origin: `${srcDir}/interceptors/responseError.ts`,
    target: `${tmpDir}/interceptors/responseError.ts`,
  },
  {
    origin: `${srcDir}/interceptors/request.ts`,
    target: `${tmpDir}/interceptors/request.ts`,
  },
  {
    origin: `${srcDir}/interceptors/requestError.ts`,
    target: `${tmpDir}/interceptors/requestError.ts`,
  },
]

export const tmpCommonDir = `${tmpDir}/common`
export const commonDir = `${srcDir}/common`
export const commonFiles = `${srcDir}/common/**/*.{ts,tsx}`
export const commonPaths = [
  {
    name: 'App.tsx',
    origin: `${srcDir}/common/App.tsx`,
    target: `${tmpDir}/common/App.tsx`,
  },
  {
    name: 'Modal.tsx',
    origin: `${srcDir}/common/Modal.tsx`,
    target: `${tmpDir}/common/Modal.tsx`,
  },
]

export const devConfigPath = `${srcDir}/config/config.dev.ts`
export const tmpDevConfigPath = `${tmpDir}/config/config.dev.ts`
export const tmpProdConfigPath = `${tmpDir}/config/config.prod.ts`

export const routerConfigPath = `${srcDir}/config/router.config.ts`
export const tmpRouterConfigPath = `${tmpDir}/config/router.config.ts`

export const modalConfigPath = `${srcDir}/config/modal.config.ts`
export const tmpModalsConfigPath = `${tmpDir}/config/modal.config.ts`
export const drawerConfigPath = `${srcDir}/config/drawer.config.ts`
export const tmpDrawersConfigPath = `${tmpDir}/config/drawer.config.ts`

export const entryPath = `${tmpDir}/index.tsx`
export const tmpPublicDir = `${tmpDir}/public`
export const publicDir = `${appDir}/public`
export const tmpHtmlPath = `${tmpDir}/public/index.html`


export const localesDir = `${srcDir}/locales`
export const tmpLocalesDir = `${tmpDir}/locales`
export const defaultLocalePath = `${srcDir}/locales/default.json`
export const tmpDefaultLocalePath = `${tmpDir}/locales/default.json`
export const localeFiles = `${srcDir}/locales/**/*.json`
export const localeTypingsPath = path.join(
  appDir,
  'node_modules',
  '@peajs/i18n',
  'dist',
  'typings.d.ts',
)

export const interceptorsDir = `${srcDir}/interceptors`
export const tmpInterceptorsDir = `${tmpDir}/interceptors`

export const tscScript = path.join(appDir, 'node_modules', '.bin', 'tsc')

export const reactScripts = path.join(
  srcDir,
  'node_modules',
  '.bin',
  'react-scripts',
)

const reactScriptsModulePath = 'react-scripts'

const webpackConfigPath = `${reactScriptsModulePath}/config/webpack.config`
const devServerConfigPath = `${reactScriptsModulePath}/config/webpackDevServer.config`

const reactScriptsPaths = `${reactScriptsModulePath}/config/paths`

export {
  reactScriptsModulePath,
  webpackConfigPath,
  devServerConfigPath,
  reactScriptsPaths,
}
