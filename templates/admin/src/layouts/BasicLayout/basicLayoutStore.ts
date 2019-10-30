import { createStore } from '@peajs/store'

export const basicLayoutStore = createStore({
  collapsed: false,
  toggle(collapsed: boolean) {
    basicLayoutStore.collapsed = collapsed
  },
})

export default basicLayoutStore
