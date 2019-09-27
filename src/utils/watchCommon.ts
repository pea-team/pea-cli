import { watch } from 'chokidar'
import { commonDir, commonFiles } from './paths'
import { createCommonFiles } from './createCommonFiles'

export const watchCommon = () => {
  watch(commonDir, {
    ignoreInitial: false,
  }).on('all', eventType => {
    if (['unlink'].includes(eventType)) {
      createCommonFiles()
    }
  })

  watch(commonFiles, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createCommonFiles()
    }
  })
}
