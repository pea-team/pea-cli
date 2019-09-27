//

export const disableCheckTS = () => {
  const path = 'react-scripts/scripts/utils/verifyTypeScriptSetup'
  require(path)
  require.cache[require.resolve(path)].exports = () => ({})
}
