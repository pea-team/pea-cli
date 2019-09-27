import { watch } from 'chokidar'
import { drawerConfigPath } from './paths'
import { createDrawerConfig } from './createDrawerConfig'

export const watchDrawerConfig = () => {
  watch(drawerConfigPath, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createDrawerConfig()
    }
  })
}
