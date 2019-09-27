import fs from 'fs-extra'
import { join } from 'path'
import { baseDir, commonPaths, tmpCommonDir } from './paths'

function writeDefaultFile(name: string) {
  const path = join(baseDir, 'assets', 'common', name)
  fs.copyFileSync(path, join(tmpCommonDir, name))
}

function createTmpCommonDir() {
  fs.ensureDirSync(tmpCommonDir)
}

export function createCommonFiles() {
  createTmpCommonDir()
  commonPaths.forEach(({ origin, target, name }) => {
    if (fs.existsSync(origin)) {
      fs.copyFileSync(origin, target)
    } else {
      writeDefaultFile(name)
    }
  })
}
