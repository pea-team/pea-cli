import React from 'react'
import { Menu, Icon } from 'antd'

import HeaderDropdown from '@components/HeaderDropdown'
import styles from './UserMenu.less'

function onMenuClick(menu: any) {
  if (menu.key === 'logout') {
    window.location.href = '/user/logout'
  }
}

const menu = (
  <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
    <Menu.Item key="userCenter">
      <Icon type="user" />
      个人中心
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <Icon type="logout" />
      退出登录
    </Menu.Item>
  </Menu>
)

export default () => {
  return (
    <HeaderDropdown overlay={menu}>
      <span className={`${styles.action} ${styles.account}`}>
        {/* <Avatar
          size="small"
          className={styles.avatar}
          src={user.photo}
          alt="avatar"
        />
        <span> </span>
        <span className={styles.name}>{user.name}</span> */}
      </span>
    </HeaderDropdown>
  )
}
