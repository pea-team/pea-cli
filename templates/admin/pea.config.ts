import ModalPlugin from 'pea-plugin-modal'
import DrawerPlugin from 'pea-plugin-drawer'
import RouterPlugin from 'pea-plugin-router'
import AntdPlugin from 'pea-plugin-antd'
import LessPlugin from 'pea-plugin-less'
import RestPlugin from 'pea-plugin-rest'
import GraphqlPlugin from 'pea-plugin-graphql'
import StyledJsxPlugin from 'pea-plugin-styled-jsx'

const config = {
  title: 'Dashboard',
  plugins: [
    new RouterPlugin(),
    new AntdPlugin(),
    new DrawerPlugin(),
    new ModalPlugin(),
    new RestPlugin(),
    new GraphqlPlugin(),
    new LessPlugin({ javascriptEnabled: true }),
    new StyledJsxPlugin(),
  ],
}

export default config
