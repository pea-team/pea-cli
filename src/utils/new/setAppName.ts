import path from 'path'
import fs from 'fs-extra'

export function setAppName(root: string, appName: string) {
  const pkgPath = path.join(root, 'package.json')
  const pkg = fs.readJSONSync(pkgPath)
  pkg.name = appName
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 })
}
