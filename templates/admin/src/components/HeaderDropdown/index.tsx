import { Dropdown } from 'antd'
import classNames from 'classnames'
import React, { PureComponent } from 'react'
import styles from './index.less'

export default class HeaderDropdown extends PureComponent<any, any> {
  render() {
    const { overlayClassName, overlay, children, ...props } = this.props
    return (
      <Dropdown
        overlayClassName={classNames(styles.container, overlayClassName)}
        overlay={overlay}
        {...props}
      >
        {children}
      </Dropdown>
    )
  }
}
