import { watch } from 'chokidar'
import { entryPath } from './paths'
import { createEntryFile } from './createEntryFile'

export const watchEntryFile = () => {
  watch(entryPath, { ignoreInitial: true }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createEntryFile()
    }
  })
}
