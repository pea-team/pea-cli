import { watchConfig } from './watchConfig'
import { watchRouterConfig } from './watchRouterConfig'
import { watchModalConfig } from './watchModalConfig'
import { watchModals } from './watchModals'
import { watchDrawerConfig } from './watchDrawerConfig'
import { watchDrawers } from './watchDrawers'
import { watchPages } from './watchPages'
import { watchLocale } from './watchLocale'
import { watchCommon } from './watchCommon'

export function watcher() {
  // watch files
  watchConfig()
  watchRouterConfig()
  watchPages()
  watchModalConfig()
  watchModals()
  watchDrawerConfig()
  watchDrawers()
  watchLocale()
  watchCommon()
}
