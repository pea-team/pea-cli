import fs from 'fs-extra'
import { configPaths, tmpConfigDir } from './paths'
import texts from './texts'

function writeDefaultFile(target: string) {
  fs.writeFileSync(target, texts.config, {
    encoding: 'utf8',
  })
}

function createTmpConifgDir() {
  fs.ensureDirSync(tmpConfigDir)
}

export const createConfigFile = () => {
  createTmpConifgDir()

  configPaths.forEach(({ origin, target }) => {
    if (fs.existsSync(origin)) {
      fs.copyFileSync(origin, target)
    } else {
      writeDefaultFile(target)
    }
  })
}
