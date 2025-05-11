import { create } from 'zustand'

type ApplicationType = {
  isOpen: boolean
  open(): void
  close(): void
  toggle(): void
}

export const useApplicationStore = create<ApplicationType>()((set) => ({
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
