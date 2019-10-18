import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import path, { join } from 'path'
import yosay from 'yosay'
import fs from 'fs-extra'

import { checkAppDir } from '../utils/create/checkAppDir'
import { createAppDir } from '../utils/create/createAppDir'
import { getProjectType } from '../utils/create/getProjectType'
import { install } from '../utils/create/install'
import { showTips } from '../utils/create/showTips'
import { createPkg } from '../utils/create/createPkg'

const { green, yellow } = chalk

class Create extends Command {
  static description = 'Create a new project'
  static aliases = ['c']
  static examples = ['$ pea create', '$ pea c']

  static args = [{ name: 'appName' }]

  async run() {
    const { args } = this.parse(Create)
    const appName: string = args.appName
    if (!appName) {
      return this.log(
        yellow('required project name, eg: '),
        green('pea create myapp'),
      )
    }

    const templateDir = path.join(__dirname, '..', '..', 'templates')
    const root = path.resolve(appName)
    const projectDir = path.resolve(appName)

    console.log(yosay('您正在初始化 peajs 项目...'))

    try {
      const projectType = await getProjectType()
      createAppDir(root)
      checkAppDir(root, appName)
      await fs.copy(join(templateDir, projectType), projectDir, {
        overwrite: true,
      })
      await createPkg(appName, projectDir)
      await install(root, projectType)
      showTips(root, appName)
    } catch (error) {
      this.log(error)
    }
  }
}

export = Create
