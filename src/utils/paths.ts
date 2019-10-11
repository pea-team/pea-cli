import path from 'path'
import fs from 'fs'

export const baseDir = path.join(__dirname, '..', '..')

export const appDir = path.resolve(fs.realpathSync(process.cwd()))
export const srcDir = path.resolve(fs.realpathSync(process.cwd()), 'src')

export const tmpDir = `${srcDir}/.pea`
export const tmpConfigDir = `${tmpDir}/config`

export const peaConfigPath = `${appDir}/pea.config.ts`
export const tmpPeaConfigPath = `${tmpDir}/pea.config.js`

export const configPaths = [
  {
    origin: `${srcDir}/config/config.ts`,
    target: `${tmpDir}/config/config.ts`,
  },
]

export const AppPath = `${srcDir}/App.tsx`
export const tmpAppPath = `${tmpDir}/App.tsx`

export const entryPath = `${tmpDir}/index.tsx`
export const tmpPublicDir = `${tmpDir}/public`

export const publicDir = `${appDir}/public`
export const tmpHtmlPath = `${tmpDir}/public/index.html`

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
