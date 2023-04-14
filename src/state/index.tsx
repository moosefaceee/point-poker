import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type User = {
  name: string
}

type UserStoreType = {
  user: User
  setName: (name: string, rememberMe?: boolean) => void
  removeName: () => void
}

const usernameKey = 'name'

const useUserStore = create<UserStoreType>()(
  devtools(
    persist((set) => ({
      user: { name: '' },
      setName: (name, rememberMe) => set(() => ({ user: { name } })),
      removeName: () => set(() => ({ user: { name: '' } })),
    })),
    { name: usernameKey },
  ),
)

export { useUserStore, type UserStoreType, type User }
