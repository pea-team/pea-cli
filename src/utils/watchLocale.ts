import { watch } from 'chokidar'
import { localeFiles, localesDir, defaultLocalePath } from './paths'
import { createLocaleTypings } from './createLocaleTypings'
import { createLocalesFiles } from './createLocalesFiles'

export const watchLocale = () => {
  watch(localesDir, {
    ignoreInitial: false,
  }).on('all', eventType => {
    if (['unlink'].includes(eventType)) {
      createLocalesFiles()
      createLocaleTypings()
    }
  })

  watch(localeFiles, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createLocalesFiles()
      createLocaleTypings()
    }
  })
}
