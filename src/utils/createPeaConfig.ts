import fs from 'fs-extra'
import spawn from 'cross-spawn'
import { tscScript, peaConfigPath, tmpDir } from './paths'

export const createPeaConfig = () => {
  if (!fs.existsSync(peaConfigPath)) return

  const args = [
    peaConfigPath,
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
