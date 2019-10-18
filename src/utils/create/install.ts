import spawn from 'cross-spawn'
import path from 'path'
import { projectType } from './projectType.enum'

const deps = {
  [projectType.SIMPLE]: [
    "@types/react@latest",
    "@types/react-dom@latest",
    '@peajs/core@latest',
    'react@latest',
    'react-dom@latest',
    'pea-cli@latest',
  ],

  [projectType.ROUTER]: [
    "@types/react@latest",
    "@types/react-dom@latest",
    '@peajs/core@latest',
    '@peajs/router@latest',
    'pea-plugin-router@latest',
    'react@latest',
    'react-dom@latest',
    'pea-cli@latest',
  ],
}

type Type = projectType.SIMPLE | projectType.ROUTER

export function install(root: string, type: Type) {
  const command = 'npm'
  process.chdir(root)
  const args: string[] = ['i', ...deps[type]]

  const child = spawn(command, args, { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code !== 0) {
        // TODO: handle ERROR
        reject({
          command: `${command} ${args.join(' ')}`,
        })
        return
      }

      process.chdir(path.resolve(root, '..'))
      resolve()
    })
  })
}
