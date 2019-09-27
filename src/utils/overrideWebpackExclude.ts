import { Configuration, RuleSetRule } from 'webpack'

export const overrideWebpackExclude = () => (config: Configuration) => {
  if (!config.module) return config

  const rules = config.module.rules.map(rule => {
    // update eslint-loader include
    if (rule.test) {
      if (rule.test.toString() === /\.(js|mjs|jsx)$/.toString()) {
        rule.exclude = /node_modules/
      }
      return rule
    }

    // update babel-loader include
    if (rule.oneOf) {
      const oneOf = rule.oneOf.map(item => {
        if (item.test) {
          if (item.test.toString() === /\.(js|mjs|jsx|ts|tsx)$/.toString()) {
            item.exclude = /node_modules/
          }
        }
        return item
      })
      rule.oneOf = oneOf
    }
    return rule
  }) as RuleSetRule[]

  config.module.rules = rules
  return config
}
