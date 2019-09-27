import { watch } from 'chokidar'
import { routerConfigPath } from './paths'
import { createRouterConfig } from './createRouterConfig'

export const watchRouterConfig = () => {
  watch(routerConfigPath, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createRouterConfig()
    }
  })
}
