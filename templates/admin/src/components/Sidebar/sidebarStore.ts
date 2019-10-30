import { createStore } from '@peajs/store'

const getOpenKeys = (): string[] => {
  const key = `/${window.location.pathname.split('/')[1]}`
  return [key] || []
}

export const siderStore = createStore({
  openKeys: getOpenKeys(),
  updateOpenKeys(keys: string[]) {
    siderStore.openKeys = keys
  },
})

export default siderStore
