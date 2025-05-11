import { create } from 'zustand'

type MenuType = {
  isOpen: boolean
  open(): void
  close(): void
  toggle(): void
}

export const useMenuStore = create<MenuType>()((set) => ({
  isOpen: false,
  open() {
    set(() => ({ isOpen: true }))
  },
  close() {
    set(() => ({ isOpen: false }))
  },
  toggle() {
    set((state) => ({ isOpen: !state.isOpen }))
  },
}))
