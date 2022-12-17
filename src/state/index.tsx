import { localStorageHelpers } from 'utils/localStorageHelpers'
import create from 'zustand'

type User = {
  name: string
}

type UserStoreType = {
  user: User
  setName: (name: string, rememberMe: boolean) => void
  removeName: () => void
}

const usernameKey = 'name'

const useUserStore = create<UserStoreType>((set) => ({
  user: { name: '' },
  setName: (name, rememberMe) =>
    set(() => {
      const localStorage = localStorageHelpers()

      if (rememberMe) {
        localStorage.setItem(usernameKey, name)
      } else if (!rememberMe && !!localStorage.getItem(usernameKey)) {
        localStorage.removeItem(usernameKey)
      }

      return { user: { name } }
    }),
  removeName: () =>
    set(() => {
      localStorage.removeItem(usernameKey)

      return { user: { name: '' } }
    }),
}))

export { useUserStore, type UserStoreType, type User }
