import { watch } from 'chokidar'

import { drawerFiles } from './paths'
import { createDrawerConfig } from './createDrawerConfig'

export const watchDrawers = () => {
  watch(drawerFiles, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'unlink', 'unlinkDir'].includes(eventType)) {
      createDrawerConfig()
    }
  })
}
