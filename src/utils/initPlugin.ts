import { getPluginConfig } from './getPluginConfig'

import globby, { GlobbyOptions } from 'globby'
import { join, resolve } from 'path'
import { pluginConfigPath } from './paths'
import texts from './texts'

function getInstance(cwd: string): any {
  const file = findCliFile(cwd)
  if (!file) return null
  const result = requireFile(file)
  if (!result) return null

  return new result()
}

function findCliFile(cwd: string) {
  const opt: GlobbyOptions = {
    ignore: ['**/node_modules/**'],
    onlyFiles: true,
    cwd,
  }
  const patterns = `**/*/cli.js`
  const [file] = globby.sync(patterns, opt).map(i => join(cwd, i))
  if (!file) return null
  return file
}

function requireFile(file: string) {
  try {
    const result = require(file).default
    if (!result) return null
    return result
  } catch {
    return null
  }
}

export function initPlugin() {
  let entryText = texts.entry
  const pluginConfig = getPluginConfig()

  if (!pluginConfig) return { entryText }
  for (const item of pluginConfig) {
    if (!item.package) continue
    let cwd: string = ''
    if (item.dir) cwd = resolve(pluginConfigPath, item.dir)
    if (item.package) cwd = join(process.cwd(), 'node_modules', item.package)
    const cli = getInstance(cwd)
    if (!cli) continue

    if (cli.webpackWillCompile) {
      cli.webpackWillCompile()
    }

    if (cli.updateEntryText) {
      entryText = cli.updateEntryText(entryText)
    }
  }
  return { entryText }
}
