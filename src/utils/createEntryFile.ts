import fs from 'fs-extra'
import { tmpDir, entryPath } from './paths'
import { formatCode } from './formatCode'

export const createEntryFile = (text: string) => {
  fs.ensureDirSync(tmpDir)
  
  fs.writeFileSync(entryPath, formatCode(text), { encoding: 'utf8' })
}
