import { watch } from 'chokidar'

import { modalFiles } from './paths'
import { createModalConfig } from './createModalConfig'

export const watchModals = () => {
  watch(modalFiles, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'unlink', 'unlinkDir'].includes(eventType)) {
      createModalConfig()
    }
  })
}
