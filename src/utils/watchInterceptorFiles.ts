import { watch } from 'chokidar'

import { interceptorFiles } from './paths'
import { createInterceptorFiles } from './createInterceptorFiles'

export const watchModals = () => {
  watch(interceptorFiles, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'unlink', 'unlinkDir'].includes(eventType)) {
      createInterceptorFiles()
    }
  })
}
