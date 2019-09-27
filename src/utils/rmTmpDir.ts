import fs from 'fs-extra'
import { tmpDir } from './paths'

export function rmTmpDir() {
  fs.removeSync(tmpDir)
}
