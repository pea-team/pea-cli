import { MenuItem } from './typings'

function trimSlash(str: string) {
  return str.replace(/^\//, '').replace(/\/$/, '')
}

export default function setMenuKey(
  items: MenuItem[],
  parentKey = '',
): MenuItem[] {
  return items.map(item => {
    const { path = '', children = [] } = item
    let key = [parentKey, trimSlash(path)].join('/')

    if (children.length) {
      return {
        ...item,
        key,
        children: setMenuKey(children, key),
      }
    }

    return { ...item, key }
  })
}
