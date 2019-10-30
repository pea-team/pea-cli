import { Layout } from 'antd'
import React from 'react'
import { Observer } from '@peajs/store'

import Sidebar from '@components/Sidebar'
import basicLayoutStore from './basicLayoutStore'
import Footer from './Footer'
import Header from './Header'

const { Sider, Content } = Layout
const { collapsed } = basicLayoutStore

const BasicLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Layout>
        <Observer>
          {() => (
            <Sider
              width={256}
              trigger={null}
              collapsible={true}
              collapsed={collapsed}
            >
              <Sidebar collapsed={collapsed} />
            </Sider>
          )}
        </Observer>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Header />
          <Content
            style={{
              margin: '24px',
            }}
          >
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  )
}
export default BasicLayout
