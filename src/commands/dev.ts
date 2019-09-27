import { Command } from '@oclif/command'
import ora from 'ora';

import { reactScriptsModulePath } from '../utils/paths'
import { prepare } from '../utils/prepare'
import { watcher } from '../utils/wather'

import { disableClearConsole } from '../utils/disableClearConsole'
import { customizeServer } from '../utils/customizeServer'

import { disableCheckRequiredFilesPath } from '../utils/disableCheckRequiredFilesPath'
import { disableCheckTS } from '../utils/disableCheckTS'
import { customizePaths } from '../utils/customizePaths'
import { customizeWebpack } from '../utils/customizeWebpack'

export default class Dev extends Command {
  static description = 'Run a dev server for development'
  static aliases = ['s']
  static examples = ['$ pea start', '$pea s']

  async run() {
    const spinner = ora('Pea prepare...').start();
    process.env.NODE_ENV = process.env.NODE_ENV || 'development'
    process.env.SKIP_PREFLIGHT_CHECK = 'true'

    await prepare()
    watcher()

    // customize cra
    customizePaths()
    customizeWebpack()

    // TODO: hack
    customizeServer()
    disableCheckRequiredFilesPath()
    disableClearConsole()
    disableCheckTS()

    spinner.stop()

    require(`${reactScriptsModulePath}/scripts/start`)
  }
}
