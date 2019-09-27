import { watch } from 'chokidar'

import { pageFiles } from './paths'
import { createRouterConfig } from './createRouterConfig'

export const watchPages = () => {
  watch(pageFiles, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'unlink', 'unlinkDir'].includes(eventType)) {
      createRouterConfig()
    }
  })
}
