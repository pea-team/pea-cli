import React, { PureComponent } from 'react'

import { Icon, Menu } from 'antd'
import classNames from 'classnames'
import { getLocale, setLocale } from '@peajs/i18n'
import HeaderDropdown from '../HeaderDropdown'

import styles from './index.less'

export default class SelectLang extends PureComponent<any, any> {
  changeLang = ({ key }: { key: any }) => {
    setLocale(key)
    window.location.reload()
  }

  render() {
    const { className } = this.props
    const selectedLang = getLocale()
    const locales: ['cn', 'en'] = ['cn', 'en']
    const languageLabels = {
      cn: '中文',
      en: 'English',
    }
    const languageIcons = {
      cn: '🇨🇳',
      en: '🇬🇧',
    }
    const langMenu = (
      <Menu
        className={styles.menu}
        selectedKeys={[selectedLang]}
        onClick={this.changeLang}
      >
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    )
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" title={'todo'} />
        </span>
      </HeaderDropdown>
    )
  }
}
