import { formatCode } from './formatCode'

const entryImportCode = `
import React, { Fragment } from 'react'
import Pea from '@peajs/core'
import userConfig from './config/config'
import App from './App'
`

const afterImportCodes: string[] = []

const configCode = `
Pea.updateConfig({ app: App, ...userConfig })
`

const beforeBootstrapCodes: string[] = []

const renderCodes: string[] = []

const bootstrapCode = `
Pea.bootstrap(element)
`

export const entryCodes = []

const config = formatCode(`
const config = {
}
export default config
`)

const appCode = formatCode(`
import React, { Fragment } from 'react'

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}
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
  appCode,
}
