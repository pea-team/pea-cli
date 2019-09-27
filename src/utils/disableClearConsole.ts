// TODO: hack
// https://github.com/facebook/create-react-app/issues/2495

export const disableClearConsole = () => {
  const clearConsole = 'react-dev-utils/clearConsole'
  require(clearConsole)
  require.cache[require.resolve(clearConsole)].exports = () => ({})
}
