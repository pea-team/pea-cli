import fs from 'fs-extra'
import { join } from 'path'
import { tmpDir, baseDir, tmpPublicDir, publicDir } from './paths'

export const createPublicFiles = () => {
  fs.ensureDirSync(tmpDir)
  if (fs.existsSync(publicDir)) {
    fs.copySync(publicDir, tmpPublicDir)
  } else {
    fs.copySync(join(baseDir, 'assets', 'public'), tmpPublicDir)
  }
}
