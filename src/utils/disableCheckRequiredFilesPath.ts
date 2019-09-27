//  hack
// https://github.com/timarney/react-app-rewired/issues/244
// prevent `react-scripts` from checking for the existence of `public/index.html`
export const disableCheckRequiredFilesPath = () => {
  const checkRequiredFilesPath = 'react-dev-utils/checkRequiredFiles'
  require(checkRequiredFilesPath)
  require.cache[require.resolve(checkRequiredFilesPath)].exports = () => true
}
