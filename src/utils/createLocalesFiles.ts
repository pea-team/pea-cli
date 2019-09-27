import fs from 'fs-extra'
import {
  localesDir,
  tmpLocalesDir,
  defaultLocalePath,
  tmpDefaultLocalePath,
} from './paths'

const localeObj = {
  appName: '一个牛逼的平台',
  nav: {
    home: '首页',
    contact: '联系',
    about: '关于',
  },
}

const localeText = JSON.stringify(localeObj, null, 2)

function writeDefaultFile() {
  createLocalesDir()
  fs.writeFileSync(tmpDefaultLocalePath, localeText, {
    encoding: 'utf8',
  })
}

function createLocalesDir() {
  fs.ensureDirSync(tmpLocalesDir)
}

export function createLocalesFiles() {
  const shouldCreateDefaultLocales =
    !fs.existsSync(localesDir) || !fs.existsSync(defaultLocalePath)

  // 不存在用户的 locales, 使用默认的
  if (shouldCreateDefaultLocales) {
    writeDefaultFile()
  } else {
    // 存在用户的 locales

    fs.copySync(localesDir, tmpLocalesDir)
  }
}
