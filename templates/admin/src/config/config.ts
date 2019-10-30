import { MenuConfig } from '@typings/admin'

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'

function handleResponse(result: any) {
  if (typeof result !== 'object') return result
  if (Object.keys(result).length === 1) {
    return result[Object.keys(result)[0]]
  }
  return result
}

const menuConfig: MenuConfig = [
  {
    path: '/',
    icon: 'dashboard',
    name: 'Home',
  },
  {
    path: '/todo',
    icon: 'read',
    name: 'Todo',
    children: [
      {
        path: '/list',
        icon: 'file',
        name: 'List',
      },
      {
        path: '/item',
        icon: 'line-chart',
        name: 'Item',
      },
    ],
  },
]

const config = {
  menuConfig,
  rest: {
    endpoint: isProd
      ? 'https://jsonplaceholder.typicode.com'
      : 'https://jsonplaceholder.typicode.com',
  },
  graphql: {
    endpoint: 'http://127.0.0.1:5001/graphql',
    interceptor: {
      responses: [handleResponse],
    },
  },
}

export default config
