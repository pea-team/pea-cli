import prettier from 'prettier'

export function formatCode(text: string, parser: string = 'typescript') {
  const opt = {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    parser,
    trailingComma: 'all',
  } as prettier.Options
  return prettier.format(text, opt)
}
