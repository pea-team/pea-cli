import { watchConfig } from './watchConfig'
import { watchAppFile } from './watchAppFile'

export function watcher() {
  // watch files
  watchConfig()
  watchAppFile()
}
