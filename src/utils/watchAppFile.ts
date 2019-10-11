import { watch } from 'chokidar'
import { AppPath } from './paths'
import { createAppFile } from './createAppFile'

export const watchAppFile = () => {
  watch(AppPath, { ignoreInitial: true }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createAppFile()
    }
  })
}
