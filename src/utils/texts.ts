import { formatCode } from './formatCode'

export const entryText = formatCode(`
import Pea, { Config } from '@peajs/core'
import { ResponseInterceptor, RequestInterceptor } from '@peajs/rest'
import { modalStore } from '@peajs/modal'

import userConfig from './config/config'
import routes from './config/router.config'
import modals from './config/modal.config'
import drawers from './config/drawer.config'
import response from './interceptors/response'
import request from './interceptors/request'
import App from './common/App'
import Modal from './common/Modal'

const responseInterceptors: ResponseInterceptor[] = Array.isArray(response)
  ? response
  : [response]

const requestInterceptors: RequestInterceptor[] = Array.isArray(request)
  ? request
  : [request]

const { NODE_ENV } = process.env

const config = {
  routes,
  modals,
  drawers,
  graphql: {
    endpoint: '/graphql',
  },
  rest: {
    endpoint: location.protocol + '//' + location.host,
  },
  root: '#root',
  app: App,
} as Config

// customize modal
modalStore.setModalContainer(Modal)

const isProd = NODE_ENV === 'production'

const finalConfig = {
  ...config,
  ...userConfig,
} as Config

finalConfig.rest.interceptor = {} as any
finalConfig.rest.interceptor.responses = responseInterceptors
finalConfig.rest.interceptor.requests = requestInterceptors

const lang = localStorage.getItem('__lang__') || 'default'

import('./locales/' + lang + '.json')
  .then(i => {
    ;(window as any).__locale__ = i.default
    Pea.bootstrap(finalConfig)
  })
  .catch(() => {
    Pea.bootstrap(finalConfig)
  })

`)

const interceptor = formatCode(`
export default (data: any) => {
  return data
}
`)

const config = formatCode(`
const config = {
}
export default config
`)

export default {
  entry: entryText,
  interceptor,
  config,
}
