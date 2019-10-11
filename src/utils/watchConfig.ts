import fs from 'fs'
import { watch } from 'chokidar'
import { configPaths } from './paths'

export const watchConfig = () => {
  configPaths.forEach(({ origin, target }) => {
    watch(origin, { ignoreInitial: true }).on('all', eventType => {
      if (['add', 'change', 'unlink'].includes(eventType)) {
        fs.copyFileSync(origin, target)
      }
    })
  })
}
