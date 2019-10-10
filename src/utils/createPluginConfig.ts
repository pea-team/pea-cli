import fs from 'fs-extra'
import spawn from 'cross-spawn'
import { tscScript, tmpDir, pluginConfigPath } from './paths'

export const createPluginConfig = () => {
  if (!fs.existsSync(pluginConfigPath)) return

  const args = [
    pluginConfigPath,
    '--target',
    'es5',
    '--lib',
    'es7,esnext.asynciterable',
    '--moduleResolution',
    'node',
    '--skipLibCheck',
    '--esModuleInterop',
    '--outDir',
    tmpDir,
  ]
  spawn.sync(tscScript, args, {
    stdio: 'inherit',
  })
}
