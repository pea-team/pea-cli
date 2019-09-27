import fs from 'fs'
import { watch } from 'chokidar'
import { configPaths } from './paths'

export const watchConfig = () => {
  configPaths.forEach(({ origin, target }) => {
    watch(origin).on('all', eventType => {
      if (['add', 'change'].includes(eventType)) {
        fs.copyFileSync(origin, target)
      }
    })
  })
}
