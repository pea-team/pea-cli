import React, { Fragment } from 'react'

import Logo from './Logo'
import SideMenu from './SideMenu'

const Sidebar: React.SFC<{ collapsed: boolean }> = ({ collapsed }) => (
  <Fragment>
    <Logo />
    <SideMenu collapsed={collapsed} />
  </Fragment>
)

export default Sidebar
