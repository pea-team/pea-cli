import fs from 'fs-extra'
import { tmpDir, tmpEntryPath, entryPath } from './paths'
import { formatCode } from './formatCode'
import texts from './texts'

function createEntryCode() {
  return `
    ${texts.codes.entryImportCode}
    ${texts.codes.afterImportCodes.join('\n')}


    // init entry
    ;(async () => {
      ${texts.codes.configCode}
      ${texts.codes.beforeBootstrapCodes.join('\n')}


      const Wrapper = Pea.config.app ? Pea.config.app : Fragment

      const element = (
        <Wrapper>
          ${texts.codes.renderCodes.join('\n')}
        </Wrapper>
      )

      ${texts.codes.bootstrapCode}

    })()
  `
}

/**
 * 可以自定义 entry，如果存在，就直接copy过去，否则生成 index.ts
 */
export const createEntryFile = () => {
  fs.ensureDirSync(tmpDir)

  if (fs.existsSync(entryPath)) {
    fs.copyFileSync(entryPath, tmpEntryPath)
  } else {
    fs.writeFileSync(tmpEntryPath, formatCode(createEntryCode()), {
      encoding: 'utf8',
    })
  }
}
