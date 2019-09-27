import fs from 'fs-extra'
import texts from './texts'
import { tmpDir, entryPath } from './paths'

export const createEntryFile = () => {
  fs.ensureDirSync(tmpDir)
  fs.writeFileSync(entryPath, texts.entry, { encoding: 'utf8' })
}
