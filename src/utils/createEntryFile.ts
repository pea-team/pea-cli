import fs from 'fs-extra'
import { tmpDir, entryPath } from './paths'
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

export const createEntryFile = () => {
  fs.ensureDirSync(tmpDir)
  fs.writeFileSync(entryPath, formatCode(createEntryCode()), {
    encoding: 'utf8',
  })
}
