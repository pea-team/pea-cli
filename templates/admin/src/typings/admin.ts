export interface MenuItem {
  path: string
  key?: string
  icon: string
  name: string
  children?: MenuItem[]
}

export type MenuConfig = MenuItem[]
