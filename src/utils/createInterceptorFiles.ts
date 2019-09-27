import fs from 'fs-extra'
import { interceptorPaths, tmpInterceptorsDir } from './paths'
import texts from './texts'

function writeDefaultFile(target: string) {
  fs.writeFileSync(target, texts.interceptor, {
    encoding: 'utf8',
  })
}

function createTmpInterceportsDir() {
  fs.ensureDirSync(tmpInterceptorsDir)
}

export function createInterceptorFiles() {
  createTmpInterceportsDir()
  interceptorPaths.forEach(({ origin, target }) => {
    if (fs.existsSync(origin)) {
      fs.copyFileSync(origin, target)
    } else {
      writeDefaultFile(target)
    }
  })
}
