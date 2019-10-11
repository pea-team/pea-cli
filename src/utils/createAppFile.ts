import fs from 'fs-extra'
import { AppPath, tmpAppPath } from './paths'
import texts from './texts';

function writeDefaultFile(target: string) {
  fs.writeFileSync(target, texts.appCode, {
    encoding: 'utf8',
  })
}


export const createAppFile = () => {

    if (fs.existsSync(AppPath)) {
      fs.copyFileSync(AppPath, tmpAppPath)
    } else {
      writeDefaultFile(tmpAppPath)
    }

}
