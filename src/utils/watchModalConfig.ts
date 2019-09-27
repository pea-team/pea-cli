import { watch } from 'chokidar'
import { modalConfigPath } from './paths'
import { createModalConfig } from './createModalConfig'

export const watchModalConfig = () => {
  watch(modalConfigPath, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createModalConfig()
    }
  })
}
