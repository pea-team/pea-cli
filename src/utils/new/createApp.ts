import chalk from 'chalk'
const download = require('download-git-repo')

enum template {
  simple = 'pea-team/pea-simple',
  admin = 'pea-team/pea-admin',
}

const { cyan } = chalk

export async function createApp(root: string, type: 'simple' | 'admin') {
  return new Promise((resolve, reject) => {
    download(template[type], root, (err: any) => {
      if (err) return reject(err)
      resolve()
      console.log(`Creating a new Pea app in ${chalk.green(root)}.`)
      console.log()
      console.log('Installing packages. This might take a couple of minutes.')
      console.log(`Installing ${cyan('react')}, ${cyan('react-dom')}, and ${cyan('pea')}...`)
      console.log()
    })
  })
}
