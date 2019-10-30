import React from 'react'
import { Layout } from 'antd'
import { observe } from '@peajs/store'
import styled from 'styled-components'

// import basicLayoutStore from './basicLayoutStore'

import SelectLang from '@components/SelectLang'
import UserMenu from './UserMenu'
// import styles from './Header.less'

const Wrapper = styled.div`
  padding: 0 20px;
  float: right;
`

const { Header } = Layout

// function onCollapse(collapsed: boolean) {
//   basicLayoutStore.toggle(!collapsed)
// }

const HeaderView = observe(() => {
  // const { collapsed } = basicLayoutStore
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      {/* <span className={styles.trigger}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => onCollapse(collapsed)}
        />
      </span> */}

      <Wrapper>
        <UserMenu />
        <span> </span>
        <SelectLang />
      </Wrapper>
    </Header>
  )
})

export default HeaderView
