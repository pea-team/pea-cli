import { Command } from '@oclif/command'
import ora from 'ora';

import { reactScriptsModulePath } from '../utils/paths'
import { prepare } from '../utils/prepare'

import { disableCheckRequiredFilesPath } from '../utils/disableCheckRequiredFilesPath'
import { disableCheckTS } from '../utils/disableCheckTS'
import { customizePaths } from '../utils/customizePaths'
import { customizeWebpack } from '../utils/customizeWebpack'

export default class Build extends Command {
  static description = 'Build project for production'
  static aliases = ['b']
  static examples = ['$ pea build', '$ pea b']

  async run() {
    const spinner = ora('Pea prepare...').start();
    process.env.NODE_ENV = 'production'

    prepare()

    customizePaths()
    customizeWebpack()
    disableCheckRequiredFilesPath()
    disableCheckTS()

    // TODO: hack
    customizePaths()

    spinner.stop()

    // run original script
    require(`${reactScriptsModulePath}/scripts/build`)
  }
}
