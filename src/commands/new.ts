import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import path from 'path'
import yosay from 'yosay'

import { checkAppDir } from '../utils/new/checkAppDir'
import { createApp } from '../utils/new/createApp'
import { createAppDir } from '../utils/new/createAppDir'
import { getProjectType } from '../utils/new/getProjectType'
import { install } from '../utils/new/install'
import { setAppName } from '../utils/new/setAppName'
import { showTips } from '../utils/new/showTips'

const { green, yellow } = chalk

class New extends Command {
  static description = 'Init a new project'
  static aliases = ['n']
  static examples = ['$ pea new', '$ pea n']

  static args = [{ name: 'appName' }]

  async run() {
    const { args } = this.parse(New)
    const appName: string = args.appName
    if (!appName) {
      return this.log(yellow('required project name, eg: '), green('pea new myapp'))
    }

    const root = path.resolve(appName)

    console.log(yosay('您正在初始化 Pea 项目...'))

    try {
      const projectType = await getProjectType()
      const type = projectType === 'pea-admin' ? 'admin' : 'simple'
      createAppDir(root)
      checkAppDir(root, appName)
      await createApp(root, type)
      setAppName(root, appName)
      await install(root)
      showTips(root, appName)
    } catch (error) {
      this.log(error)
    }
  }
}

export = New
