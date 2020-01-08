import { watchConfig } from './watchConfig'
import { watchAppFile } from './watchAppFile'
import { watchEntryFile } from './watchEntryFile'

export function watcher() {
  // watch files
  watchConfig()
  watchAppFile()
  watchEntryFile()
}
