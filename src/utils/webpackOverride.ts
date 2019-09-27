export function override(config: any, env: string) {
  return {
    pipe: (...args: any[]) => {
      for (const fn of args) {
        config = fn(config, env)
      }
      return config
    },
  }
}
