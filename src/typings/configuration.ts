import { Configuration as WebpackConfig } from 'webpack'
import { Configuration as ServerConfig } from 'webpack-dev-server'

export interface Plugin {
  updateWebpackConfig?: (config: WebpackConfig, env?: string) => WebpackConfig
  devServer?: (config: ServerConfig) => ServerConfig
}

export interface Configuration extends Plugin {
  title?: string
  appHtml?: string
  outputHtml?: string
  buildDir?: string
  plugins?: Plugin[]
}
