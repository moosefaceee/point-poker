import { useUserStore } from 'state'

const Game = () => {
  const userStore = useUserStore()

  return (
    <div className="flex min-h-full h-[70vh] items-center justify-center p-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Its game time, {userStore.user.name}
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Let's goooo
          </p>
        </div>
      </div>
    </div>
  )
}

export default Game
