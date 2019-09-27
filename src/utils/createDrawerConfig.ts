import fs from 'fs-extra'
import { sep } from 'path'
import jetpack from 'fs-jetpack'

import {
  drawerConfigPath,
  drawersDir,
  tmpConfigDir,
  tmpDrawersConfigPath,
} from './paths'
import { formatCode } from './formatCode'

function last(arr: string[]): string {
  return arr[arr.length - 1]
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getDrawerName(path: string = '') {
  const fileName = path.split(sep)[2] // 第三个
  const drawerName = fileName.replace(/\.tsx$/, '')
  return drawerName
}

function getCmpName(path: string = '') {
  const fileName = path.split(sep)[2]
  const drawerName = fileName.replace(/\.tsx$/, '').replace(/[\.\-\^\$]/g, '_')
  return capitalizeFirstLetter(drawerName)
}

function formatDrawers(drawers: string[]) {
  return drawers.map(item => {
    const drawerName = getDrawerName(item)
    const cmpName = getCmpName(item)
    item = item.split(sep).join('/')
    const drawerImportPath = item
      .replace(/^src\/drawers/, '@drawers')
      .replace(/\.tsx$/, '')

    return {
      drawerName,
      cmpName,
      drawerImportPath,
    }
  })
}

function getDrawersConfig(drawers: string[]) {
  const drawerArr = formatDrawers(drawers)
  const importFiles = drawerArr
    .map(item => {
      return `import ${item.cmpName} from '${item.drawerImportPath}'`
    })
    .join('\n')
  const drawersString = drawerArr
    .map(item => {
      return `{
  name: '${item.drawerName}',
  component: ${item.cmpName},
},`
    })
    .join('\n')

  return `
${importFiles}

const drawers = [
  ${drawersString}
]

export default drawers;
    `
}

function writeFile(text: string) {
  fs.writeFileSync(tmpDrawersConfigPath, text, { encoding: 'utf8' })
}

function writeFileFromDrawersFile() {
  const routesConfig = fs.readFileSync(drawerConfigPath, { encoding: 'utf8' })
  const text = routesConfig
    .replace(/\.\.\/drawers/g, '../../drawers')
    .replace(/\.\.\/layouts/g, '../../layouts')
    .replace(/@drawers/g, '../../drawers')
  writeFile(text)
}

export const createDrawerConfig = () => {
  fs.ensureDirSync(tmpConfigDir)

  if (fs.existsSync(drawerConfigPath)) {
    writeFileFromDrawersFile()
    return
  }

  const paths: string[] = fs.existsSync(drawersDir)
    ? jetpack.find(drawersDir, { matching: '**/*.tsx' })
    : []

  const drawers = paths.filter(path => {
    const arr = path.split(sep)

    // drawer 为文件，不是目录
    if (arr.length === 3) return true

    // 两层文件, index 文件才是
    if (arr.length === 4 && last(arr) === 'index.tsx') {
      return true
    }
    return false // 其他都不 drawer
  })

  const modasText = getDrawersConfig(drawers)
  const code = formatCode(modasText)
  writeFile(code)
}
