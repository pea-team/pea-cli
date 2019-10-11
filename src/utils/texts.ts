import { formatCode } from './formatCode'

const entryImportCode = `
import React, { Fragment } from 'react'
import Pea from '../core'
import userConfig from './config/config'
import App from './common/App'
`

const afterImportCodes: string[] = []

const configCode = `
Pea.updateConfig({ app: App, ...userConfig })
`

const beforeBootstrapCodes: string[] = []

const renderCodes: string[] = [
  `
    <div>test render...</div>
  `,

  `
    <div>test render2...</div>
  `,
]

const bootstrapCode = `
Pea.bootstrap(element)
`

export const entryCodes = []

const config = formatCode(`
const config = {
}
export default config
`)

export default {
  codes: {
    entryImportCode,
    afterImportCodes,
    configCode,
    renderCodes,
    beforeBootstrapCodes,
    bootstrapCode,
  },
  config,
}
