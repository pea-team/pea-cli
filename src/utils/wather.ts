import { watchConfig } from './watchConfig'
import { watchCommon } from './watchCommon'

export function watcher() {
  // watch files
  watchConfig()
  watchCommon()
}
