const addWebpackAlias = (alias: any) => (config: any) => {
  if (!config.resolve) {
    config.resolve = {}
  }
  if (!config.resolve.alias) {
    config.resolve.alias = {}
  }
  Object.assign(config.resolve.alias, alias)
  return config
}

export const alias = (options?: any) => (config: any) => {
  return addWebpackAlias(options || {})(config)
}
